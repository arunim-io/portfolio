import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), svelte(), tailwind(), compress(), mdx()],
  site: 'https://arunim-portfolio.vercel.app/',
  vite: {
    plugins: [
      Icons({
        autoInstall: true,
        compiler: 'svelte',
      }),
    ],
    ssr: {
      external: ['svgo'],
    },
  },
});
