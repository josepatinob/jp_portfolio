import React from 'react'

import profileImg from '../images/me-androidified.jpg'
import styled from 'styled-components'

const skills = [
  'Java',
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'Kotlin',
  'Android',
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
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`

const StyledImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 0.5rem;
  object-fit: cover;
  border: 2px solid #1c1f2e;

  @media (max-width: 48rem) {
    width: 100%;
    height: auto;
  }
`

const StyledAboutMe = styled.div`
  flex: 1;
  min-width: 20rem;

  h1 {
    color: #ccef9c;
    margin-top: 0;
  }

  p {
    color: #8892b0;
    line-height: 1.7;
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #1c1f2e;
  margin: 2.5rem 0;
`

const SectionHeading = styled.h2`
  color: #e6f1ff;
  margin-bottom: 1.5rem;
`

const ExperienceGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`

const RoleCard = styled.div`
  flex: 1;
  min-width: 16rem;
  background-color: #1c1f2e;
  border-radius: 0.5rem;
  padding: 1.5rem;

  h3 {
    color: #ccef9c;
    margin-top: 0;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  p {
    color: #8892b0;
    line-height: 1.6;
    margin: 0;
  }
`

const SkillsCard = styled.div`
  background-color: #1c1f2e;
  border-radius: 0.5rem;
  padding: 1.5rem;

  h3 {
    color: #ccef9c;
    margin-top: 0;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
`

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`

const SkillTag = styled.li`
  background-color: #0f1117;
  color: #ccef9c;
  border: 1px solid #ccef9c33;
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.9rem;
`

const StyledPdfButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1.25rem;
  background-color: transparent;
  color: #ccef9c;
  border: 1px solid #ccef9c;
  border-radius: 0.25rem;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  :hover {
    background-color: #ccef9c1a;
  }
`

const About = () => {
  return (
    <>
      <StyledContainer>
        <StyledImage src={profileImg} alt="profile" />
        <StyledAboutMe>
          <h1>About me</h1>
          <p>
            Hi, my name is Jose Patino and I am a software developer in the
            Raleigh/Durham area of North Carolina. I graduated with a Bachelor's
            degree in computer science in 2017 from East Carolina University and
            have been working in the industry since then.
          </p>
          <p>
            When I am not programming I enjoy reading, playing PlayStation,
            playing basketball, lifting weights at the gym and last but
            certainly not least taking care of / playing with my son Matteo.
          </p>
          <p>
            I also enjoy the occasional hike with my wife Cecilia or the
            occasional beer or two or three.
          </p>
        </StyledAboutMe>
      </StyledContainer>

      <Divider />

      <SectionHeading>Experience</SectionHeading>
      <StyledPdfButton
        href={`${process.env.PUBLIC_URL}/Jose_Patino_Resume_2021.pdf`}
        target="_blank"
        rel="noreferrer"
        download
      >
        Download Resume (2021)
      </StyledPdfButton>

      <ExperienceGrid style={{ marginTop: '1.5rem' }}>
        <RoleCard>
          <h3>Current Role</h3>
          <p>Full Stack Software Engineer at TELUS Digital in Durham, NC</p>
          <p style={{ marginTop: '0.5rem' }}>
            Building Android applications with Kotlin. Originally joined as part
            of WillowTree, which was acquired by TELUS Digital.
          </p>
        </RoleCard>
        <RoleCard>
          <h3>Previous Experience</h3>
          <p>Credit Suisse — Morrisville, NC</p>
        </RoleCard>
        <SkillsCard>
          <h3>Languages &amp; Technologies</h3>
          <SkillsList>
            {skills.map((item) => (
              <SkillTag key={item}>{item}</SkillTag>
            ))}
          </SkillsList>
        </SkillsCard>
      </ExperienceGrid>
    </>
  )
}

export default About
