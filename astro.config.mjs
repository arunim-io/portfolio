import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [image(), sitemap(), tailwind(), compress(), svelte()],
  site: 'https://arunim-portfolio.vercel.app/',
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
