import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
  height: 12rem;
  width: 100%;
  bottom: 0;
  position: absolute;
  margin-top: auto;
`

const Footer = () => {
  return (
    <FooterStyle>
      <p>footer</p>
    </FooterStyle>
  )
}

export default Footer