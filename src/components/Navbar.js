import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavbarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 4rem;
  box-shadow: 0rem 0.05rem;
  background-color: #494e55;

  .brand {
    font-size: 2rem;
    text-decoration: none;
    color: white;
    margin: 0.5rem;
    justify-content: flex-start;
  }
  ul {
    justify-content: flex-end;
    list-style-type: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  li {
    float: right;
    display: inline;
  }
  li a {
    color: white;
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
    display: block;
    text-align: center;
    text-decoration: none;
  }
  .selected {
    font-weight: bold;
    text-decoration: underline;
  }
`

const Navbar = () => {
  return (
    <NavbarStyle>
      <Link to="/" className="brand">
        Jose Patino
      </Link>
      <ul>
        <li>
          <NavLink to="/portfolio" activeClassName="selected">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="selected">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/guides" activeClassName="selected">
            Guides
          </NavLink>
        </li>
      </ul>
    </NavbarStyle>
  )
}

export default Navbar
