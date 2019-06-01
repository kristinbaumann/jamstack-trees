import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
// import Footer from "./footer"
import "../styles/layout.css"
import "../styles/main.css"

const Layout = props => (
  <div>
    {props.pathname !== "/" ? <Header /> : null}
    <main className="main">{props.children}</main>
    {/* <Footer /> */}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
}

export default Layout
