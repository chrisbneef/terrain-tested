import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site, baseUrl } from '../site.config.mjs';
import { applications } from '../data/applications.mjs';

export const GET: APIRoute = async () => {
  const notes = await getCollection('notes');
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    '## Key facts',
    '',
    `- Independent AMSOIL Dealer based in ${site.city}, ${site.regionName}. Independently owned and operated; not AMSOIL INC.`,
    ...(site.dealerName ? [`- Dealer: ${site.dealerName}`] : []),
    '- Background: more than a decade as a heavy equipment operator, mechanic across most machine types, certified in marine engines, years in off-road and motocross racing.',
    '- Serves powersports shops and riders, heavy construction equipment owners, and small engine repair and sales shops.',
    '- This site does not list prices or take orders. Pricing and ordering go through AMSOIL INC.',
    ...(site.phone ? [`- Phone: ${site.phone}`] : []),
    ...(site.email ? [`- Email: ${site.email}`] : []),
    '',
    '## Pages',
    '',
    `- [Home](${baseUrl}/): Who the dealership is and how it works with customers`,
    `- [About the dealer](${baseUrl}/about/): Experience and background`,
    `- [Contact](${baseUrl}/contact/): How to reach the dealer`,
    '',
    '## Applications',
    '',
    ...applications.map(
      (app) => `- [${app.name}](${baseUrl}/applications/${app.slug}/): ${app.description}`,
    ),
    '',
    '## Field notes (oil education)',
    '',
    ...notes.map(
      (note) => `- [${note.data.title}](${baseUrl}/field-notes/${note.id}/): ${note.data.answer}`,
    ),
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
