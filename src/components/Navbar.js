import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">Jose Patino</Link>
      <ul>
        <li>
          <NavLink to="/portfolio" activeStyle={{ fontWeight: 'bold' }}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/guides">Guides</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
