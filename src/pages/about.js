import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

const AboutPage = (props) => (
  <Layout>
    <section>
      <Image fluid={props.data.aboutImage.childImageSharp.fluid} />
      <Div>
        <P>
          I'm Full Stack Developer who loves to work with web technologies. I am graduating in March 2019 from <A href="https://lambdaschool.com/" alt="Lambda School Home" target="_blank">Lambda School</A>, an academy with focus on full-stack web development spanning 7 months.
          Here, you will find my latest works, my technology skills, and links to my <A href="https://docs.google.com/document/d/1vO5Ee5s1YYSpoAR3Ng5RQ-IoP3S6jpo3-ALeiYa2zZo" target="_blank">resume</A> and certificates.
          If you'd like to reach me, please send me a message on <A href="https://www.linkedin.com/in/timothyhoang/" alt="My LinkedIn" target="_blank">LinkedIn</A> or in the <A href="#" alt="Contact Section" target="_blank">Contact</A> section.
        </P>
        <br />
        <P>
          I started as a self-taught developer in November 2016 from a full-time Pharmacist role.
          In the past, I have completed paid freelance web projects, worked with a remote team called Chingu-Voyage, and organized a Free Code Camp local group.
          I'm looking to work on exciting new projects, collaborate with a great team, and seize opportunities to grow.
        </P>
      </Div>
    </section>
  </Layout >
)

const Image = styled(Img)`
  max-width: 80%;
  border-radius: 3px;
  margin: 2% auto;
  padding: 0;
  box-shadow: 0 0 5px gray;
    `
const Div = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.5;
`
const P = styled.p`
  font-size: 2.4rem;
`
const A = styled.a`
  font-size: 2.4rem;
  color: black;
`

export const pageQuery = graphql`
query {
      aboutImage: file(relativePath: {eq: "gto.jpg" }) {
      childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
    }
  }
}
`

export default AboutPage
