import type { APIRoute } from 'astro';
import { baseUrl, isDraft } from '../site.config.mjs';

// While the site is a draft, everything is blocked. Once the required
// details in site.config.mjs are filled in, search engines and the AI
// search crawlers are all allowed.
const live = `User-agent: *
Allow: /

# AI search and answer engines
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${baseUrl}/sitemap-index.xml
`;

const draft = `User-agent: *
Disallow: /
`;

export const GET: APIRoute = () =>
  new Response(isDraft ? draft : live, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
