import { Link } from "gatsby"
import React from "react"
import Navigation from "./navigation"

const Header = () => (
  <header
    style={{
      background: `blue`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
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
