/* eslint-disable @typescript-eslint/no-var-requires */

const withAnimateCss = require('animated-tailwindcss');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      zIndex: {
        max: '9999999999',
      },
    },
  },
  daisyui: {
    themes: ['forest'],
  },
};

module.exports = withAnimateCss(config);
