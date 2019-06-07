import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../structure/layout"
import ContentItem from "../components/ContentItem"

const ContentPostTemplate = props => (
  <Layout pathname={props.location.pathname}>
    <div className="page container">
      <Link to="/explore" className="back-link">
        &lt; Continue Exploring
      </Link>
      <ContentItem post={props.data.post} showLink={false} />
    </div>
  </Layout>
)

export default ContentPostTemplate

export const pageQuery = graphql`
  query ContentPostBySlug($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      headline
      slug
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
`
