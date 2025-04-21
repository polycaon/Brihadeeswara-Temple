import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://brihadeeswaratemple.com',
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    ssr: {
      noExternal: ['@supabase/supabase-js']
    }
  }
});