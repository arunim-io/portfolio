/** @type {import('prettier').Config} */
module.exports = {
  editorconfig: true,
  trailingComma: 'all',
  singleQuote: true,
  endOfLine: 'auto',
  printWidth: 100,
  plugins: [require('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
