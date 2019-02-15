/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode }) => {
//   if (node.internal.type === `ContentfulBlog`) {
//     // console.log(node)
//     console.log(createFilePath({ node, getNode, basePath: 'blog' }))
//   }
// }

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allContentfulBlog(limit: 1000) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allContentfulBlog.edges.map(({ node }) => {
          createPage({
            path: `blog/${node.slug}`,
            component: path.resolve('./src/components/PostTemplate.js'),
            context: {
              slug: node.slug,
            },
          })
        })
        resolve()
      })
    )
  })
}
