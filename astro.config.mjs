import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://brihadeeswara-temple.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});