const tailwindcss = require('prettier-plugin-tailwindcss');
const astro = require('prettier-plugin-astro');

module.exports = {
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'auto',
  printWidth: 100,
  trailingComma: 'all',
  singleQuote: true,
  plugins: [tailwindcss, astro],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
