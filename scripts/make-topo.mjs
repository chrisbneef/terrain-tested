// Generates public/topo.svg: an authored, synthetic topographic sheet in
// USGS quadrangle grammar (brown contours, green woodland tint, blue water,
// red section lines). The terrain is invented; it is not a map of a real place.
// Run with: npm run topo
import { writeFileSync, mkdirSync } from 'node:fs';
import { contours } from 'd3-contour';
import { geoPath } from 'd3-geo';

const W = 240;
const H = 120;
const SCALE = 10; // output is 2400 x 1200

// Small deterministic RNG so the sheet is identical on every build.
let seed = 20261116;
const rand = () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

// Terrain: a valley floor running left to right, with ridges and buttes
// on either side.
const hills = [];
for (let i = 0; i < 26; i++) {
  const upper = i % 2 === 0;
  hills.push({
    x: rand() * W,
    y: upper ? rand() * H * 0.36 : H - rand() * H * 0.4,
    r: 9 + rand() * 24,
    h: 0.35 + rand() * 0.9,
  });
}
// Two buttes on the valley floor.
hills.push({ x: W * 0.62, y: H * 0.52, r: 7, h: 0.55 });
hills.push({ x: W * 0.28, y: H * 0.44, r: 5, h: 0.4 });

const riverY = (x) =>
  H * 0.5 + Math.sin(x / 21) * 8 + Math.sin(x / 7.3 + 1.2) * 2.6 + (x / W - 0.5) * 10;

const elevation = new Float64Array(W * H);
const woodland = new Float64Array(W * H);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    let e = 0;
    for (const hill of hills) {
      const dx = x - hill.x;
      const dy = y - hill.y;
      e += hill.h * Math.exp(-(dx * dx + dy * dy) / (2 * hill.r * hill.r));
    }
    const d = Math.abs(y - riverY(x));
    e += Math.min(d / 46, 1) * 0.55; // valley rises away from the river
    e += Math.sin(x / 9 + y / 13) * 0.06 + Math.sin(x / 4.1 - y / 5.7) * 0.03 + Math.sin(x / 2.3 + y / 3.1) * 0.012;
    elevation[y * W + x] = e;
    // Timber sits on the slopes, thinning out on the valley floor.
    woodland[y * W + x] = e + Math.sin(x / 15 + 2) * 0.16 + Math.sin(y / 11 + x / 31) * 0.12;
  }
}

const path = geoPath(null).digits(1);
const levels = [];
const peak = Math.max(...elevation);
for (let v = 0.18; v < peak; v += 0.07) levels.push(+v.toFixed(3));

const lines = contours().size([W, H]).thresholds(levels)(elevation);
const intermediate = [];
const index = [];
lines.forEach((geometry, i) => {
  const d = path(geometry);
  if (!d) return;
  (i % 5 === 0 ? index : intermediate).push(d);
});

// Woodland covers roughly the upper 45% of the timber field.
const sorted = Float64Array.from(woodland).sort();
const timberline = sorted[Math.floor(sorted.length * 0.55)];
const [woods] = contours().size([W, H]).thresholds([timberline])(woodland);

let river = '';
for (let x = -2; x <= W + 2; x += 2) {
  river += `${x === -2 ? 'M' : 'L'}${x},${riverY(x).toFixed(1)}`;
}

// Section lines: the one-mile public land survey grid, drawn in red.
const STEP = 40;
let grid = '';
for (let x = STEP; x < W; x += STEP) grid += `M${x},0V${H}`;
for (let y = STEP; y < H; y += STEP) grid += `M0,${y}H${W}`;
const sectionNumbers = [];
const numbers = [4, 3, 2, 1, 6, 5, 9, 10, 11, 12, 7, 8, 16, 15, 14, 13, 18, 17];
let n = 0;
for (let y = STEP / 2; y < H; y += STEP) {
  for (let x = STEP / 2; x < W; x += STEP) {
    sectionNumbers.push(
      `<text x="${x * SCALE}" y="${y * SCALE}">${numbers[n++ % numbers.length]}</text>`,
    );
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W * SCALE} ${H * SCALE}" preserveAspectRatio="xMidYMid slice">
<rect width="100%" height="100%" fill="#f6f6ef"/>
<g transform="scale(${SCALE})" fill="none" stroke-linejoin="round">
<path d="${path(woods)}" fill="#cfe2b0" fill-rule="evenodd"/>
<path d="${intermediate.join('')}" stroke="#a9682f" stroke-width=".07" opacity=".8"/>
<path d="${index.join('')}" stroke="#a9682f" stroke-width=".17"/>
<path d="${grid}" stroke="#c22a2f" stroke-width=".07" stroke-dasharray="1.4 .5"/>
<path d="${river}" stroke="#f6f6ef" stroke-width="1.7" stroke-linecap="round"/>
<path d="${river}" stroke="#9fcfe6" stroke-width="1" stroke-linecap="round"/>
<path d="${river}" stroke="#2a7ab0" stroke-width=".1" transform="translate(0,-.55)"/>
<path d="${river}" stroke="#2a7ab0" stroke-width=".1" transform="translate(0,.55)"/>
</g>
<g font-family="Arial,Helvetica,sans-serif" font-size="24" fill="#c22a2f" text-anchor="middle" opacity=".85">${sectionNumbers.join('')}</g>
</svg>
`;

mkdirSync(new URL('../public/', import.meta.url), { recursive: true });
writeFileSync(new URL('../public/topo.svg', import.meta.url), svg);
console.log(`topo.svg written: ${(svg.length / 1024).toFixed(0)} KB`);
