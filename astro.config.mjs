import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://brihadeeswaratemple.com',
  output: 'static',
  build: {
    assets: '_assets'
  }
});