// const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const contentPost = path.resolve("./src/templates/content-post.js")
    resolve(
      graphql(
        `
          {
            allContentfulPost {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulPost.edges
        posts.forEach(post => {
          createPage({
            path: `/explore/${post.node.slug}/`,
            component: contentPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
