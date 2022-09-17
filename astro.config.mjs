import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap(), image()],
  vite: {
    ssr: {
      external: ['svgo', 'graphql'],
    },
  },
});
