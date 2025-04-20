import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://brihadeeswara-temple.com',
  server: {
    host: true,
    port: 4321
  },
  vite: {
    server: {
      hmr: {
        clientPort: 443,
        protocol: 'wss'
      }
    }
  },
  // SEO Configuration
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  },
  experimental: {
    assets: true
  }
});