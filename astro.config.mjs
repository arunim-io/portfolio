import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [image(), sitemap(), tailwind(), compress()],
  site: 'https://arunim-portfolio.vercel.app/',
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
