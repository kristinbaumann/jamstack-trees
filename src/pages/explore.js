import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const PageExplore = props => {
  const posts = props.data.allContentfulPost.edges
  return (
    <Layout pathname={props.location.pathname} style={{}}>
      <div style={{ color: "black" }}>
        <p>Page Explore</p>
        <ul>
          {posts.map(({ node }) => (
            <li key={node.id}>{node.headline}</li>
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
        }
      }
    }
  }
`
