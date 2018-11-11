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
          I'm Full Stack Developer who loves to work with web technologies. I'm expecting to graduate in March 2019 from Lambda School, an academy with focusing on full-stack web development spanning 7 months. Here, you will find my latest works, stats about my skills, and link to my resume and certificates.
          If you'd like to reach me, please send me an email on LinkedIn or email me in the contact section.

        </P>
        <br />
        <P>
          A self-taught developer who started in January 2017 and transitioned from a full-time Pharmacist role. I'm looking to work on exciting new projects, with a great team, and seize opportunities to grow.
          In the past, I have completed paid freelance web projects, worked remotely with a team called Chingu-Voyage, and organized for a Free Code Camp local group.
        </P>
      </Div>
      <div>
        <Bar
          data={chartData}
          options={chartOptions}
          responsive={true}
        />
        <p>★ self-appointed</p>
      </div>
    </section>
  </Layout >
)

const Image = styled(Img)`
  max-width: 80%;
  border-radius: 3px;
  margin: 2% auto;
  padding: 0;
`
const Div = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-bottom: 1rem;
  text-align: left;
  line-height: 1.5;
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
