import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { Bar } from 'react-chartjs-2'
import { chartData, chartOptions } from '../assets/chart.js'

const AboutPage = (props) => (
  <Layout>
    <section>
      <Image fluid={props.data.aboutImage.childImageSharp.fluid} />
      <Div>
        <P>
          I'm Full Stack Developer who loves to work with web technologies. I'm expecting to graduate in March 2019 from <A href="https://lambdaschool.com/" alt="Lambda School Home" target="_blank">Lambda School</A>, an academy with focusing on full-stack web development spanning 7 months. Here, you will find my latest works, stats about my skills, and link to my <A href="https://docs.google.com/document/d/1vO5Ee5s1YYSpoAR3Ng5RQ-IoP3S6jpo3-ALeiYa2zZo/edit" alt="My Online Resume" target="_blank">resume</A> and certificates.
          If you'd like to reach me, please send me an email on <A href="https://www.linkedin.com/in/timothyhoang/" target="_blank">LinkedIn</A> or email me in the <A href="/contact" target="_blank">Contact</A> section.

        </P>
        <br />
        <P>
          A self-taught developer who started in January 2017 and transitioned from a full-time Pharmacist role. I'm looking to work on exciting new projects, with a great team, and seize opportunities to grow.
          In the past, I have completed paid freelance web projects, worked remotely with a team called <A href="https://chingu.io/" target="_blank">Chingu Voyage</A>, and organized for a Free Code Camp <A href="https://free-code-camp-ashburn.github.io/website/" target="_blank">local group</A>.
        </P>
      </Div>
      <Div2>
        <A href="https://docs.google.com/document/d/1vO5Ee5s1YYSpoAR3Ng5RQ-IoP3S6jpo3-ALeiYa2zZo/edit" alt="My Online Resume" target="_blank">
          <Button>My Online Resume</Button>
        </A>
        <A href="https://www.freecodecamp.org/timh1203/front-end-certification" alt="Certificate: Free Code Camp" target="_blank">
          <Button>Certificate: Free Code Camp</Button>
        </A>
        <A href="https://www.udemy.com/certificate/UC-F6RNIX9G/" alt="Certificate: Web Dev Bootcamp" target="_blank">
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
    </section>
  </Layout >
)

const Div = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-bottom: 2rem;
  text-align: left;
  line-height: 1.5;
`
const Div2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`
const Div3 = styled.div`
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

export const pageQuery = graphql`
query {
  aboutImage: file(relativePath: { eq: "gto.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default AboutPage
