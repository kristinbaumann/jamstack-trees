import React from "react"

import Layout from "../components/layout"

const PageThanks = props => (
  <Layout pathname={props.location.pathname}>
    <div className="page container">
      <p>Thank you!</p>
    </div>
  </Layout>
)

export default PageThanks
