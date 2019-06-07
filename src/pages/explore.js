import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ContentPost from "../components/ContentPost"

const PageExplore = props => {
  const allPosts = props.data.allContentfulPost.edges

  return (
    <Layout pathname={props.location.pathname}>
      <div className="page container">
        <ul className="posts">
          {allPosts.map(({ node }) => (
            <ContentPost node={node} key={node.id} />
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default PageExplore

export const pageQuery = graphql`
  query PostQuery {
    allContentfulPost {
      edges {
        node {
          id
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
`
