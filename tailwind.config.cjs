const path = require('node:path');

const withAnimateCss = require('animated-tailwindcss');
const defaultFontFamily = require('tailwindcss/defaultTheme').fontFamily;

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
    path.join(require.resolve('@brainandbones/skeleton'), '../**/*.{html,js,svelte,ts}'),
  ],
  darkMode: 'class',
  plugins: [require('@brainandbones/skeleton/tailwind/theme.cjs')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultFontFamily.sans],
        mono: ['Fira Code', ...defaultFontFamily.mono],
      },
    },
  },
};

module.exports = withAnimateCss(config);
