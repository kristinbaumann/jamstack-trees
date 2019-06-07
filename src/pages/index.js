import React from "react"

import Layout from "../structure/layout"
import { Link } from "gatsby"

const PageIndex = props => (
  <Layout pathname={props.location.pathname}>
    <div className="page background-wrapper">
      <div className="container">
        <div className="box">
          <h1 className="teaser">Trees.</h1>
          <Link className="button button-primary" to="/plant">
            Plant a Tree
          </Link>
          <Link className="text-link" to="/explore">
            Explore more
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default PageIndex
