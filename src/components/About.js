import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
// import { Bar } from 'react-chartjs-2'
// import { links, skills, chartData, chartOptions } from '../assets/'
import { links, skills } from '../assets/'

const AboutPage = props => (
  <Section1 id="about">
    <H1a>About</H1a>
    <Hr />
    <Image fluid={props.aboutImage} />
    <Div>
      <P>
        Full stack developer who loves to work with web technologies.
        {' '}
        <A
          href={links.lambdaSchool.url}
          alt={links.lambdaSchool.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          Lambda School
        </A>
        {' '}alumnus, a fast-paced 7-month academy with a focus on full-stack web development and computer science. I started coding in January 2017, when I transitioned away from a full-time pharmacist role.

        <br />
        <br />

        Previous experiences include:
        <Ul>
          <li>Worked as a core developer on a project for Lambda School Labs to build {' '}
            <A
              href={links.refreshr.url}
              alt={links.refreshr.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              Refreshr
            </A>
          </li>
          <li>
            Led 5 other developers as scrummaster during Lambda School Build Week with {' '}
            <A
              href={links.guidr.url}
              alt={links.guidr.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              Guidr
            </A>
          </li>
          <li>Paid freelance web projects with  {' '}
            <A
              href={links.dullesBarber.url}
              alt={links.dullesBarber.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              Dulles barber
            </A>
            , {' '}
            <A
              href={links.derikJones.url}
              alt={links.derikJones.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              Derik Jones
            </A>
            , {' '}
            <A
              href={links.vzSuites.url}
              alt={links.vzSuites.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              VZ Suites
            </A>
          </li>
          <li>
            Organized for a {' '}
            <A
              href={links.fccAshburn.url}
              alt={links.fccAshburn.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              Free Code Camp local group
            </A>
          </li>
        </Ul>

        <br />

        In my spare time, I enjoy traveling internationally, hiking on
        national forest trails, reading non-fiction books/tech articles, and
        experimenting with GatsbyJS.
      </P>

      <br />
      <br />

      <P>
        If you'd like to reach me, please send me a message on{' '}
        <A
          href={links.linkedIn.url}
          alt={links.linkedIn.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </A>{' '}
        or email me in the{' '}
        <A href="/contact" target="_blank" rel="noopener noreferrer">
          Contact
        </A>{' '}
        section.
      </P>
    </Div>

    <Div2>
      <A2
        href={links.resume.url}
        alt={links.resume.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>My Online Resume</Button>
      </A2>
      <A2
        href={links.fccCertificate.url}
        alt={links.fccCertificate.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Certificate: Free Code Camp</Button>
      </A2>
      <A2
        href={links.wdbcCertificate.url}
        alt={links.wdbcCertificate.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Certificate: Udemy FullStack</Button>
      </A2>
    </Div2>

    {/* <Div3>
      <Bar
        data={chartData}
        options={chartOptions}
        responsive={true}
      />
      <p>★ self-appointed</p>
    </Div3> */}

    <Div4>
      <Div5>
        <h3>‣ Front-End:</h3>
        {skills.frontEnd.map(skill => (
          <P key={skill}>{skill}</P>
        ))}
      </Div5>
      <Div5>
        <h3>‣ Back-End:</h3>
        {skills.backEnd.map(skill => (
          <P key={skill}>{skill}</P>
        ))}
      </Div5>
      <Div5>
        <h3>‣ Other:</h3>
        {skills.other.map(skill => (
          <P key={skill}>{skill}</P>
        ))}
      </Div5>
    </Div4>
  </Section1>
)

const Section1 = styled.section`
  color: ${props => props.theme.textColor};
  @media (max-width: 768px) {
    margin: 5rem 0;
  }
`
const Div = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-bottom: 3rem;
  text-align: left;
  line-height: 1.5;
  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`
const Div2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3rem;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`
// const Div3 = styled.div`
//   margin-bottom: 3rem;
// `
const Div4 = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  font-size: 2rem;
  line-height: 1.5;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`
const Div5 = styled.div`
  @media (max-width:400px) {
    margin: 1rem 0;
  }
`
const Image = styled(Img)`
  max-width: 80%;
  border-radius: 3px;
  margin: 2% auto;
  padding: 0;
  box-shadow: ${props => props.theme.imageShadow};
  @media (max-width: 768px) {
    max-width: 100%;
  }
`
const A = styled.a`
  color: ${props => props.theme.textColor};
  text-decoration: none;
  border-bottom: 2px solid ${props => props.theme.underlineColor};
  &:hover {
    bottom: 3px;
    position: relative;
  }
`
const A2 = styled.a`
  color: ${props => props.theme.textColor};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.underlineColor};
    border-bottom: none;
  }
`
const Hr = styled.hr`
  border-color: ${props => props.theme.textColor};
`
const H1a = styled.h1``
const Button = styled.button`
  font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  color: ${props => props.theme.themeToggleButton};
  background: black;
  border: 2px solid ${props => props.theme.themeToggleButton};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.themeToggleButton};
    border: 2px solid ${props => props.theme.textColor};
  }
`
const P = styled.p`
  font-size: 1.8rem;
`
// const P1 = styled(P)`
//   text-align: center;
// `
const Ul = styled.ul`
  list-style: circle;
  margin-left: 30px;
`

export default AboutPage
