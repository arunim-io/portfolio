/* eslint-disable @typescript-eslint/no-var-requires */

const withAnimateCss = require('animated-tailwindcss');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['forest'],
  },
};

module.exports = withAnimateCss(config);
