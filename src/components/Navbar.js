import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: #0f1117;
  border-bottom: 1px solid #1c1f2e;
  padding: 0 2rem;

  .brand {
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    color: #ccef9c;
    letter-spacing: 0.05em;

    @media (max-width: 31.25rem) {
      font-size: 1.2rem;
    }
  }
`

const Navbar = () => {
  return (
    <NavbarStyle>
      <Link to="/" className="brand">
        Jose Patino
      </Link>
    </NavbarStyle>
  )
}

export default Navbar
