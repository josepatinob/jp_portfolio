import React from 'react'

import hikingImg from '../images/hiking.jpg'
import styled from 'styled-components'

const skills = [
  'Java',
  'JavaScript',
  'ReactJS',
  'Jenkins',
  'Openshift',
  'Kubernetes',
  'Docker',
  'Golang',
  'Dart',
  'Flutter',
  'SQL',
  'MongoDB',
]

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

const StyledRecentProject = styled.div`
  max-width: 35rem;
`

const StyledPdfButton = styled.button`
  height: 2rem;
  background-color: white;
  outline: none;
  border-radius: 0.1rem;
  cursor: pointer;
  :hover {
    background-color: #2b67af;
    color: white;
    border: none;
  }

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`

const StyledLastModified = styled.p`
  font-size: 0.8rem;
  font-style: italic;
`

const About = () => {
  return (
    <>
      <StyledContainer>
        <StyledImage src={hikingImg} alt="hiking" />
        <StyledAboutMe>
          <h1>About me</h1>
          <p>
            Hi, my name is Jose Patino and I am a software developer in the
            Raleigh/Durham area of North Carolina. I graduated with a Bachelor's
            degree in computer science in 2017 from East Carolina University and
            have been working in the industry since then.
          </p>
          <p>
            When I am not programming I enjoy reading, playing Playstation,
            playing basketball, lifting weights at the gym and last but
            certainly not least taking care of / playing with my son Matteo.
          </p>
          <p>
            I also enjoy the occasional hike with my wife Cecilia or the
            occasional beer or two or three.
          </p>
        </StyledAboutMe>
      </StyledContainer>
      <h1>Experience</h1>
      <StyledPdfButton>
        <a
          href={`${process.env.PUBLIC_URL}/Jose_Patino_Resume_2021.pdf`}
          target="_blank"
          rel="noreferrer"
          download
        >
          Download Resume
        </a>
      </StyledPdfButton>
      <StyledLastModified>
        Resume was last updated February 20, 2021 at 1:16 PM
      </StyledLastModified>
      <StyledContainer>
        <StyledRecentProject>
          <h3>Current Role</h3>
          <p>
            Fullstack Software Developer at Credit Suisse in Morrisville NC from
            July 2017 to Present
          </p>
          <h3>Most recent project</h3>
          <p>
            Designed, developed and unit tested a web application that allows
            users to disclose outside business activities. The application was
            released globally and developed using ReactJS, Java 11, Spring Boot,
            Jenkins, JPA, Hibernate, and Oracle.
          </p>
        </StyledRecentProject>
        <div>
          <h3>Programming languages | Frameworks | Libraries</h3>
          <ul>
            {skills.map((item) => {
              return <li>{item}</li>
            })}
          </ul>
        </div>
      </StyledContainer>
    </>
  )
}

export default About
