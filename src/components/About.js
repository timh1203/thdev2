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
      <Ul>
        <li>
          Working as a Web Applications Developer at{' '}
          <A
            href={links.opensymmetry.url}
            alt={links.opensymmetry.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenSymmetry
          </A>
          , a global SPM company
        </li>
        <li>
          Pioneering the Plutus Core language with Plutus Pioneer Program at{' '}
          <A
            href={links.plutuspioneerprogram.url}
            alt={links.plutuspioneerprogram.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            IOHK
          </A>
          , a blockchain and cryptocurrency company
        </li>
        <li>
          Volunteering with Hispanic Hackers at{' '}
          <A
            href={links.hispanichackers.url}
            alt={links.hispanichackers.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            Austin Hispanic Hackers
          </A>
          , a technology promoting diversity and inclusion in technology
        </li>
        <li>
          Worked as an associate full-stack software engineer at{' '}
          <A
            href={links.tenavox.url}
            alt={links.tenavox.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tenavox
          </A>
          , a startup in the commercial real estate industry
        </li>

        <li>
          Worked as a core developer on a project for Lambda School Labs to
          build{' '}
          <A
            href={links.refreshr.video}
            alt={links.refreshr.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            Refreshr
          </A>
        </li>

        <li>
          Led 5 other developers as scrummaster during Lambda School Build Week
          with{' '}
          <A
            href={links.guidr.video}
            alt={links.guidr.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            Guidr
          </A>
        </li>

        <li>
          Worked as a freelancer with clients to develop web projects:{' '}
          <A
            href={links.dullesBarber.url}
            alt={links.dullesBarber.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            Dulles barber
          </A>
          ,{' '}
          <A
            href={links.derikJones.url}
            alt={links.derikJones.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            Derik Jones
          </A>
          ,{' '}
          <A
            href={links.vzSuites.url}
            alt={links.vzSuites.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            VZ Suites
          </A>
          ,{' '}
          <A
            href={links.sightsee.url}
            alt={links.sightsee.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sightsee With Me
          </A>
        </li>

        <li>
          Organized for a{' '}
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
      <Hr />
      <br />

      <P>
        A software engineer who loves to work with front-end, full-stack, and
        web technologies. A{' '}
        <A
          href={links.lambdaSchool.url}
          alt={links.lambdaSchool.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          Lambda School
        </A>{' '}
        alumnus from a fast-paced 7-month academy with focus on full-stack web
        development and computer science. Started coding in January 2017 when
        transitioned away from a full-time pharmacist role.
      </P>

      <br />
      <br />

      <P>
        In my spare time, I enjoy traveling, outdoor activities, reading
        non-fiction books/tech articles, taking coding courses, and
        experimenting with new technologies and learning new features. I'm
        currently exploring the React and Blockchain ecosystems.
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
    </Div2>

    <Div2>
      <A2
        href={links.lambdaBadge.url}
        alt={links.lambdaBadge.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Badge: Lambda School</Button>
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
        <Button>Certificate: Udemy Full-Stack</Button>
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
        <h3>‣ Other Skills:</h3>
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
  @media (max-width: 400px) {
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
const H1a = styled.h1`
  text-align: left;
`
const Button = styled.button`
  font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  color: ${props => props.theme.themeToggleButton};
  background: ${props => props.theme.buttonBackground};
  border: 2px solid ${props => props.theme.buttonBorder};
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
  font-size: 1.8rem;
`

export default AboutPage
