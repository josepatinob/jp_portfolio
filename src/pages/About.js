import React from 'react'

import hikingImg from '../images/hiking.jpg'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledImage = styled.img`
  width: 22rem;
  height: 22rem;
  border-radius: 1rem;
`

const StyledAboutMe = styled.div`
  max-width: 45rem;
`

const About = () => {
  return (
    <StyledContainer>
      <StyledImage src={hikingImg} alt="hiking" />
      <StyledAboutMe>
        <h1>About me</h1>
        <p>
          Hi, my name is Jose Patino and I am a software developer. I graduated
          with a Bachelor's degree in computer science in 2017 from East
          Carolina University and have been working in the industry since then.
        </p>
        <p>
          When I am not programming I enjoy reading, playing Playstation,
          playing basketball, lifting weights at the gym and last but certainly
          not least taking care of / playing with my son Matteo.
        </p>
        <p>
          I also enjoy the occasional hike with my wife Cecilia or the
          occasional beer or two or three.
        </p>
      </StyledAboutMe>
    </StyledContainer>
  )
}

export default About
