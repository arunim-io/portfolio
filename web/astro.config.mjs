import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap()],
  vite: {
    ssr: {
      external: ['svgo', 'graphql'],
    },
  },
});
