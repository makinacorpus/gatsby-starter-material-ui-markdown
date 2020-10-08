const path = require('path');

exports.createPages = async ({ actions: { createPage }, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          parent {
            ... on File {
              name
              relativeDirectory
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.allMarkdownRemark.nodes.forEach(({ id, parent: { name, relativeDirectory } }) => {
    createPage({
      path: path.join(relativeDirectory, name),
      component: require.resolve('./src/templates/SimplePage.js'),
      context: { id },
    });
  });
};
