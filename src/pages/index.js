import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Navigation from "../components/navigation"

const IndexPage = props => (
  <Layout pathname={props.location.pathname}>
    <Navigation />
    <h1>Trees.</h1>
    <p>Button - Plant</p>
    <p>Text Link - Explor</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
