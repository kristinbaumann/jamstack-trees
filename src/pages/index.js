import React from "react"

import Layout from "../components/layout"
import treeImage from "../images/trees1.jpg"
import { Link } from "gatsby"

const IndexPage = props => (
  <Layout pathname={props.location.pathname}>
    <div
      className="page background-wrapper"
      style={{
        backgroundImage: `url(${treeImage})`,
      }}
    >
      <div className="container">
        <div className="box">
          <h1 className="teaser">Trees.</h1>
          <button className="button">
            <Link to="/plant">Plant a Tree</Link>
          </button>
          <p className="text-link">
            <Link to="/plant">Explore more</Link>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
