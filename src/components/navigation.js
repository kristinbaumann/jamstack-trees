import { Link } from "gatsby"
import React from "react"

const Navigation = () => (
  <ul>
    <li>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/page-explore"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Explore
      </Link>
    </li>
    <li>
      <Link
        to="/page-plant"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Plant
      </Link>
    </li>
  </ul>
)

export default Navigation
