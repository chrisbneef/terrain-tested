// Single source of truth for business details. Every page, the footer,
// robots.txt, llms.txt and the structured data read from here.
//
// Fields left as null are hidden on the site. While any REQUIRED field is
// null, the site shows a draft bar and tells search engines not to index it.

export const site = {
  // REQUIRED before launch -------------------------------------------------
  url: null, // e.g. 'https://www.yourdomain.com' (no trailing slash)
  dealerName: null, // the dealer's full name, used for bylines and Person schema
  phone: null, // e.g. '541-555-0123'
  email: null, // e.g. 'name@yourdomain.com'

  // Fixed facts --------------------------------------------------------------
  name: 'Terrain Tested Synthetic Lubricants',
  shortName: 'Terrain Tested',
  city: 'Eugene',
  region: 'OR',
  regionName: 'Oregon',
  country: 'US',
  description:
    'Independent AMSOIL Dealer in Eugene, Oregon. Straight synthetic lubricant advice for powersports, heavy equipment and small engine shops from an operator, mechanic and racer.',

  // Optional -----------------------------------------------------------------
  // Dealer-number link to the AMSOIL online store. All pricing and ordering
  // happens there; this site never shows prices.
  amsoilStoreUrl: null,
  // Profiles that belong to this dealership (Google Business Profile,
  // Facebook, Instagram, YouTube). Used for schema sameAs and the footer.
  profiles: [],
  // Paste the standardized banner code from the AMSOIL Dealer Zone here
  // (Business Tools > Marketing Your Dealership > My Dealer Website).
  amsoilBannerHtml: null,
};

export const missing = ['url', 'dealerName', 'phone', 'email'].filter((key) => !site[key]);
export const isDraft = missing.length > 0;

// Used for canonical URLs while the real domain is not set.
export const baseUrl = site.url ?? 'https://example.com';

export const telHref = site.phone ? `tel:+1${site.phone.replace(/\D/g, '')}` : null;
export const mailHref = site.email ? `mailto:${site.email}` : null;

export const nav = [
  { href: '/applications/', label: 'Applications' },
  { href: '/field-notes/', label: 'Field Notes' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
