import React from "react"
import Layout from "../structure/layout"
import ContentList from "../components/ContentList"

const PageExplore = props => (
  <Layout pathname={props.location.pathname}>
    <div className="page container">
      <ContentList />
    </div>
  </Layout>
)

export default PageExplore
