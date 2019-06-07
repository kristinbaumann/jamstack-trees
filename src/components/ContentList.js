import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ContentItem from "./ContentItem"

const ContentList = () => (
  <StaticQuery
    query={graphql`
      query PostQuery {
        posts: allContentfulPost {
          edges {
            node {
              id
              slug
              headline
              image {
                id
                file {
                  url
                }
              }
              source {
                json
              }
            }
          }
        }
      }
    `}
    render={({ posts }) => (
      <ul className="posts">
        {posts.edges.map(({ node: post }) => (
          <ContentItem post={post} key={post.id} showLink={true} />
        ))}
      </ul>
    )}
  />
)

export default ContentList
