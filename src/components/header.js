import { Link } from "gatsby"
import React from "react"
import Navigation from "./navigation"
import treeImage from "../images/trees1.jpg"

const Header = () => (
  <header
    className="header"
    style={{
      backgroundImage: `url(${treeImage})`,
    }}
  >
    <div className="container header-wrapper">
      <h1>
        <Link to="/">Trees.</Link>
      </h1>
      <Navigation />
    </div>
  </header>
)

export default Header
