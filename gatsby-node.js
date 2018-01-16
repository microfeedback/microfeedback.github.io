'use strict';

const {resolve, dirname, basename} = require('path');

exports.createPages = async ({graphql, boundActionCreators}) => {
  const {createPage, createRedirect} = boundActionCreators;
  // Used to detect and prevent duplicate redirects
  const redirectToSlugMap = {};

  const template = resolve(__dirname, 'src/templates/docs.js');

  // Redirect /index.html to root.
  createRedirect({
    fromPath: '/index.html',
    redirectInBrowser: true,
    toPath: '/',
  });

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                redirectFrom
                slug
              }
            }
          }
        }
      }
    `
  );

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw new Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug;
    const createArticlePage = path =>
      createPage({
        path,
        component: template,
        context: {
          slug,
        },
      });

    // Register primary URL.
    createArticlePage(slug);

    // Register redirects as well if the markdown specifies them.
    if (edge.node.fields.redirectFrom) {
      let redirect = JSON.parse(edge.node.fields.redirectFrom);
      if (!Array.isArray(redirect)) {
        redirect = [redirect];
      }

      redirect.forEach(fromPath => {
        if (redirectToSlugMap[fromPath] != null) {  // eslint-disable-line no-eq-null, eqeqeq
          console.error(
            `Duplicate redirect detected from "${fromPath}" to:\n` +
              `* ${redirectToSlugMap[fromPath]}\n` +
              `* ${slug}\n`
          );
          throw new Error();
        }

        // A leading "/" is required for redirects to work,
        // But multiple leading "/" will break redirects.
        // For more context see github.com/reactjs/reactjs.org/pull/194
        const toPath = slug.startsWith('/') ? slug : `/${slug}`;

        redirectToSlugMap[fromPath] = slug;
        createRedirect({
          fromPath: `/${fromPath}`,
          redirectInBrowser: true,
          toPath,
        });
      });
    }
  });
};

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators;
  switch (node.internal.type) {
    case 'MarkdownRemark': {
      let {slug} = node.frontmatter;
      const redirectFrom = node.frontmatter.redirect_from;
      const {relativePath} = getNode(node.parent);
      const dir = dirname(relativePath);

      if (!slug) {
        // content/foo/index.md => /foo/
        if (basename(relativePath, '.md') === 'index') {
          slug = `/${dir}/`;
        } else {  // content/foo/bar.md => /foo/bar/
          slug = `/${relativePath.replace('.md', '/')}`;
        }
      }

      // Used to generate URLs
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });

      // Used to generate Github edit links
      createNodeField({
        node,
        name: 'path',
        value: relativePath,
      });

      // Used by createPages() above to register redirects.
      createNodeField({
        node,
        name: 'redirectFrom',
        value: redirectFrom ? JSON.stringify(redirectFrom) : '',
      });

      // Used to generate sidebars
      createNodeField({
        node,
        name: 'dir',
        value: dir,
      });
      break;
    }
    default: {
      break;
    }
  }
};
