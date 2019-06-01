import React from "react"

import Layout from "../components/layout"
import Navigation from "../components/navigation"
import treeImage from "../images/trees1.jpg"

import "../styles/home.css"
import Checkout from "../components/checkout"

const IndexPage = props => (
  <Layout pathname={props.location.pathname}>
    <div
      className="page-home"
      style={{
        backgroundImage: `url(${treeImage})`,
      }}
    >
      <Navigation />
      <h1>Trees.</h1>
      <p>Button - Plant</p>
      <p>Text Link - Explore</p>
      <Checkout />
    </div>
  </Layout>
)

export default IndexPage
