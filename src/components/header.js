import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="header">
    <div className="container header-wrapper">
      <h1>
        <Link to="/">Trees.</Link>
      </h1>
      <ul className="navigation">
        <li className="navigation-item">
          <Link to="/explore">Explore</Link>
        </li>
        <li className="navigation-item">
          <Link to="/plant">Plant</Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
