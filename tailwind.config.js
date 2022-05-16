/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./app/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['forest'],
  },
};
