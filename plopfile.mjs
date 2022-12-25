/// @ts-check
import { blogPostGenerator } from './.plop/index.mjs';

/**
 * @param {import('plop').NodePlopAPI} plop
 */
export default function (plop) {
  plop.load('plop-helper-slugify');

  plop.setGenerator('post', blogPostGenerator);
  plop.setHelper('date', () => new Date().toLocaleDateString('en-GB'));
}
