/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: 'vercel',
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  ignoredRouteFiles: ['**/.*'],
  mdx: async () => {
    const [rehypeHighlight, remarkToc] = await Promise.all([
      import('rehype-highlight').then((mod) => mod.default),
      import('remark-toc').then((mod) => mod.default),
    ]);
    return {
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeHighlight],
    };
  },
};
