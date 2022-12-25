const path = require('node:path');

const plugin = require('tailwindcss/plugin');
const withAnimateCss = require('animated-tailwindcss');
const defaultFontFamily = require('tailwindcss/defaultTheme').fontFamily;

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
    path.join(require.resolve('@brainandbones/skeleton'), '../**/*.{html,js,svelte,ts}'),
  ],
  darkMode: 'class',
  plugins: [
    require('@brainandbones/skeleton/tailwind/theme.cjs'),
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents }) {
      addComponents({});
    }),
  ],
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
