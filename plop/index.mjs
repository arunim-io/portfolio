/// @ts-check

/** @type {import('plop').PlopGeneratorConfig} */
export const blogPostGenerator = {
  description: 'Blog post generator',
  prompts: [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of this post?',
    },
    {
      type: 'input',
      name: 'subtitle',
      message: 'What is the subtitle of this post?',
      default: '',
    },
    {
      type: 'input',
      name: 'cover',
      message: 'What is the cover image of this post?',
      default: '',
    },
    {
      type: 'input',
      name: 'types',
      message: 'What topics are related to this post?',
      default: '[]',
    },
  ],
  actions: [
    {
      type: 'add',
      templateFile: './plop/templates/post.md.hbs',
      path: './src/pages/blog/posts/{{kebabCase title}}/post.md',
    },
  ],
};
