import { Link } from "gatsby"
import React from "react"
import Navigation from "./navigation"
import treeImage from "../images/trees1.jpg"

const Header = () => (
  <header
    style={{
      backgroundColor: `blue`,
      height: "150px",
      marginBottom: `1.45rem`,
      backgroundImage: `url(${treeImage})`,
      backgroundSize: "cover",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Trees.
        </Link>
      </h1>
      <Navigation />
    </div>
  </header>
)

export default Header
