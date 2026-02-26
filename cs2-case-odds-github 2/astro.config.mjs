import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cs2caseodds.com',
  integrations: [sitemap()],
});
