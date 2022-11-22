import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import AutoImport from 'unplugin-auto-import/astro';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  integrations: [
    AutoImport({
      dts: true,
      eslintrc: {
        enabled: true,
      },
      imports: ['svelte'],
    }),
    image(),
    sitemap(),
    tailwind(),
    compress(),
    svelte(),
  ],
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
