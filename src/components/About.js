import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Bar } from 'react-chartjs-2'
import { links, skills, chartData, chartOptions } from '../assets/'

const AboutPage = (props) => (
  <Section1 id="about">
    <H1a>About</H1a>
    <Hr />
    <Image fluid={props.aboutImage} />
    <Div>
      <P>
        I'm full stack developer who loves to work with web technologies. I'm will graduate in March 2019 from <A href={links.lambdaSchool.url} alt={links.lambdaSchool.alt} target="_blank" rel="noopener noreferrer">Lambda School</A>, an 7-month academy with focus on full-stack web development and computer science. I started to coding in January 2017 and transitioned away from a full-time Pharmacist role. In the past, I have completed paid freelance web projects, worked remotely with a team called <A href={links.chingu.url} alt={links.chingu.alt} target="_blank" rel="noopener noreferrer">Chingu Voyage</A>, and organized for a Free Code Camp <A href={links.fccAshburn.url} alt={links.fccAshburn.alt} target="_blank" rel="noopener noreferrer">local group</A>.
      </P>
      <br />
      <P>
        My mindset for 2019 is one of "extreme ownership", a concept popularized by Jocko Willink. Taking responsibility, whether it's code or life, has tremendous impact on the people around us. At the end of the day, our ability to solve problems is to ultimately benefit human beings. I want to take pride and responsibility in that.

        In my spare time, I enjoy traveling internationally, hiking on national forest trails, reading non-fiction books and tech articles, and experimenting with GatsbyJS.
      </P>
      <br />
      <P1>
        If you'd like to reach me, please send me an email on <A href={links.linkedIn.url} alt={links.linkedIn.alt} target="_blank" rel="noopener noreferrer">LinkedIn</A> or email me in the <A href="/contact" target="_blank" rel="noopener noreferrer">Contact</A> section.
      </P1>
    </Div>

    <Div2>
      <A
        href={links.resume.url}
        alt={links.resume.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>My Online Resume</Button>
      </A>
      <A
        href={links.fccCertificate.url}
        alt={links.fccCertificate.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Certificate: Free Code Camp</Button>
      </A>
      <A
        href={links.wdbcCertificate.url}
        alt={links.wdbcCertificate.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Certificate: Web Dev Bootcamp</Button>
      </A>
    </Div2>

    <Div3>
      <Bar
        data={chartData}
        options={chartOptions}
        responsive={true}
      />
      <p>★ self-appointed</p>
    </Div3>

    <Div4>
      <div>
        <h3>‣ Front-End:</h3>
        {skills.frontEnd.map(skill => <P key={skill}>{skill}</P>)}
      </div>
      <div>
        <h3>‣ Back-End:</h3>
        {skills.backEnd.map(skill => <P key={skill}>{skill}</P>)}
      </div>
      <div>
        <h3>‣ Other:</h3>
        {skills.other.map(skill => <P key={skill}>{skill}</P>)}
      </div>
    </Div4>
  </Section1>
)

const Section1 = styled.section`
  color: ${props => props.theme.textColor};
`
const Div = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-bottom: 3rem;
  text-align: left;
  line-height: 1.5;
`
const Div2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3rem;
`
const Div3 = styled.div`
  margin-bottom: 3rem;
`
const Div4 = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  font-size: 2.0rem;
  line-height: 1.5;
`
const Image = styled(Img)`
  max-width: 80%;
  border-radius: 3px;
  margin: 2% auto;
  padding: 0;
  box-shadow: ${props => props.theme.imageShadow};
`
const A = styled.a`
  color: ${props => props.theme.textColor};
`
const Hr = styled.hr`
  border-color: ${props => props.theme.textColor};
`
const H1a = styled.h1`
`
const Button = styled.button`
  /* font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  box-shadow: ${props => props.theme.buttonShadow};
  &:hover {
    background: black;
    color: white;
    font-weight: 700;
    cursor: pointer;
  } */
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
const P1 = styled(P)`
  text-align: center;
`

export default AboutPage
