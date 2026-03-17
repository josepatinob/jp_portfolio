import React from 'react'
import styled from 'styled-components'
import LinkedIn from '../images/linkedin.png'
import GitHub from '../images/github.png'

const FooterStyle = styled.div`
  height: 12rem;
  width: 100%;
  bottom: 0;
  position: absolute;
  margin-top: auto;
  background-color: #0f1117;
  border-top: 1px solid #1c1f2e;
`

const FooterContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`

const StyledLink = styled.a`
  margin: 1rem;
  display: inline-flex;
  align-items: center;
  opacity: 0.7;
  transition: opacity 0.2s, transform 0.2s;

  :hover {
    opacity: 1;
    transform: scale(1.2);
  }
`

const StyledImage = styled.img`
  max-width: 1.75rem;
  filter: invert(1) brightness(2);
`

const Footer = () => {
  return (
    <FooterStyle>
      <FooterContainer>
        <StyledLink href="https://github.com/josepatinob" target="_blank" rel="noreferrer">
          <StyledImage src={GitHub} alt="github" />
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/josepatinob/" target="_blank" rel="noreferrer">
          <StyledImage src={LinkedIn} alt="linkedin" />
        </StyledLink>
      </FooterContainer>
    </FooterStyle>
  )
}

export default Footer
