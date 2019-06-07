import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/layout.css"
import "../styles/styles.css"

const layout = props => (
  <>
    <Helmet>
      <title>JAMstack Trees</title>
      <link
        href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div className="layout-wrapper">
      {props.pathname !== "/" ? <Header /> : null}
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  </>
)

layout.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
}

export default layout
