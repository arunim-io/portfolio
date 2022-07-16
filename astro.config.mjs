import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import reactVite from '@vitejs/plugin-react';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
    plugins: [reactVite()],
  },
});
