import { Link } from "gatsby"
import React from "react"

const Navigation = () => (
  <ul>
    <li>
      <Link
        to="/"
        style={{
          color: `red`,
          textDecoration: `none`,
        }}
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/explore"
        style={{
          color: `red`,
          textDecoration: `none`,
        }}
      >
        Explore
      </Link>
    </li>
    <li>
      <Link
        to="/plant"
        style={{
          color: `red`,
          textDecoration: `none`,
        }}
      >
        Plant
      </Link>
    </li>
  </ul>
)

export default Navigation
