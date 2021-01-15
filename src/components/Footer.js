import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
  height: 10rem;
  background-color: #3d3d3d;
  width: 100%;
  bottom: 0;
  position: absolute;
`

const Footer = () => {
  return (
    <FooterStyle>
      <p>footer</p>
    </FooterStyle>
  )
}

export default Footer