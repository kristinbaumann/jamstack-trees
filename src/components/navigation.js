import React from "react"
import { Link } from "gatsby"

const navItems = [
  // { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
  { name: "Plant", path: "/plant" },
]

const Navigation = () => (
  <ul className="navigation">
    {navItems.map((el, elIndex) => (
      <li className="navigation-item" key={elIndex}>
        <Link to={el.path}>{el.name}</Link>
      </li>
    ))}
  </ul>
)

export default Navigation
