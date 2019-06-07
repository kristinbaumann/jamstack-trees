const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
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
          actions.createPage({
            path: `/explore/${post.node.slug}/`,
            component: path.resolve("./src/templates/content-post.js"),
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
