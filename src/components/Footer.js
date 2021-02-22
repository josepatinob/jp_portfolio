import React from 'react'
import styled from 'styled-components'
import Instagram from '../images/instagram.png'
import Twitter from '../images/twitter.png'
import LinkedIn from '../images/linkedin.png'
import GitHub from '../images/github.png'

const FooterStyle = styled.div`
  height: 12rem;
  width: 100%;
  bottom: 0;
  position: absolute;
  margin-top: auto;
`

const FooterContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`

const StyledButton = styled.button`
  margin: 2rem;
  border: none;
  background-color: white;
  outline: none;
  :hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`

const StyledImage = styled.img`
  max-width: 2rem;
`

const Footer = () => {
  return (
    <FooterStyle>
      <FooterContainer>
      <StyledButton as="a" href="https://github.com/jpatino37" target="_blank">
          <StyledImage src={GitHub} alt="github" />
        </StyledButton>
        <StyledButton as="a" href="https://www.instagram.com/jpatino_37/" target="_blank">
          <StyledImage src={Instagram} alt="instagram" />
        </StyledButton>
        <StyledButton as="a" href="https://www.linkedin.com/in/%F0%9F%98%81-%F0%9F%92%BB-jose-patino-bolanos-4a943bb8/" target="_blank">
          <StyledImage src={LinkedIn} alt="linkedin" />
        </StyledButton>
        <StyledButton as="a" href="https://twitter.com/jpatino3792" target="_blank">
          <StyledImage src={Twitter} alt="twitter" />
        </StyledButton>
      </FooterContainer>
    </FooterStyle>
  )
}

export default Footer
