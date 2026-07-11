import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://phalanxracing.com.tr',
  integrations: [sitemap()],
});
