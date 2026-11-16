import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { baseUrl } from './src/site.config.mjs';

export default defineConfig({
  site: baseUrl,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
