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
        I'm Full Stack Developer who loves to work with web technologies. I'm expecting to graduate in March 2019 from <A href={links.lambdaSchool.url} alt={links.lambdaSchool.alt} target="_blank" rel="noopener noreferrer">Lambda School</A>, an academy with focusing on full-stack web development spanning 7 months. Here, you will find my latest works, stats about my skills, and link to my <A href={links.resume.url} alt={links.resume.alt} target="_blank" rel="noopener noreferrer">resume</A> and certificates.
          If you'd like to reach me, please send me an email on <A href={links.linkedIn.url} alt={links.linkedIn.alt} target="_blank" rel="noopener noreferrer">LinkedIn</A> or email me in the <A href="/contact" target="_blank" rel="noopener noreferrer">Contact</A> section.
        </P>
      <br />
      <P>
        A self-taught developer who started in January 2017 and transitioned from a full-time Pharmacist role. I'm looking to work on exciting new projects, with a great team, and seize opportunities to grow.
          In the past, I have completed paid freelance web projects, worked remotely with a team called <A href={links.chingu.url} alt={links.chingu.alt} target="_blank" rel="noopener noreferrer">Chingu Voyage</A>, and organized for a Free Code Camp <A href={links.fccAshburn.url} alt={links.fccAshburn.alt} target="_blank" rel="noopener noreferrer">local group</A>.
        </P>
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
  box-shadow: 0 0 5px black;
`
const A = styled.a`
`
const Hr = styled.hr`
`
const H1a = styled.h1`
`
const Button = styled.button`
  padding: 1rem;
  border-radius: 3px;
  font-family: 'Quicksand';
  font-size: 1.4rem;
  box-shadow: 1px 1px 3px black;

  :hover {
    background: black;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }
`
const P = styled.p`
  font-size: 1.8rem;
`

export default AboutPage
