/* eslint-disable @typescript-eslint/no-var-requires */

const withAnimateCss = require('animated-tailwindcss');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      animation: {
        typing: '4s typing-erase 4s steps(50, end) infinite, blink-caret .5s step-end infinite',
      },
      keyframes: {
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#1eb854' },
        },
        'typing-erase': {
          '0%': { width: '0' },
          '80%': { width: '100%' },
          '90%, 100%': { width: '0' },
        },
      },
      maxWidth: {
        content: 'max-content',
      },
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
