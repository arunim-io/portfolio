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
    plugin(function ({ addComponents }) {
      addComponents({});
    }),
  ],
  theme: {
    extend: {
      backgroundPosition: {
        'top-center': 'top center',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultFontFamily.sans],
        mono: ['Fira Code', ...defaultFontFamily.mono],
      },
      keyframes: {
        twinkling: {
          from: {
            'background-position': '0 0',
          },
          to: {
            'background-position': '-100000px 5000px',
          },
        },
      },
    },
  },
};

module.exports = withAnimateCss(config);
