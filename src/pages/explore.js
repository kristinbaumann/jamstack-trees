import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

const PageExplore = props => {
  const posts = props.data.allContentfulPost.edges
  return (
    <Layout pathname={props.location.pathname}>
      <div className="page container">
        <ul className="posts">
          {posts.map(({ node }) => (
            <li className="post" key={node.id}>
              <div className="post-image-wrapper">
                <img src={node.image.file.url} alt={node.headline} />
              </div>
              <div className="post-text-wrapper">
                <p className="title">{node.headline}</p>
                <span className="subtitle">
                  {documentToReactComponents(node.source.json)}
                </span>
              </div>
            </li>
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
