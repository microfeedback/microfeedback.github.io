'use strict';

const {resolve, dirname, basename} = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

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

      redirect.forEach(each => {
        let fromPath;
        let redirectInBrowser;
        if (typeof each === 'string') {
          fromPath = each;
          // redirect in browser if not specified
          redirectInBrowser = true;
        } else {
          fromPath = each.path;
          redirectInBrowser = each.browser === undefined ? true : each.browser;
        }
        // Ensure fromPath has a leading slash
        fromPath = fromPath.startsWith('/') ? fromPath : `/${fromPath}`;
        // eslint-disable-next-line no-eq-null, eqeqeq
        if (redirectToSlugMap[fromPath] != null) {
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
          toPath,
          fromPath,
          redirectInBrowser,
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
        } else {
          // content/foo/bar.md => /foo/bar/
          slug = `/${relativePath.replace('.md', '')}`;
        }
      }

      let sectionList;
      const navPath = resolve('content', dir, 'nav.yml');
      if (fs.existsSync(navPath)) {
        sectionList = yaml.safeLoad(fs.readFileSync(navPath));
        sectionList.forEach(list => {
          list.items.forEach(item => {
            if (item.id === 'index') {
              item.slug = `/${dir}/`;
            } else {
              item.slug = `/${dir}/${item.id}`;
            }
          });
        });
      } else {
        sectionList = [];
      }

      createNodeField({
        node,
        name: 'sectionList',
        value: JSON.stringify(sectionList),
      });

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
