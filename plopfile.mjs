/// @ts-check

import { blogPostGenerator } from './plop/index.mjs';

/**
 * @param {import('plop').NodePlopAPI} plop
 */
export default function (plop) {
  plop.load('plop-helper-slugify');
  plop.load('plop-helper-date');

  plop.setGenerator('post', blogPostGenerator);
}
