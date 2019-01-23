import React from 'react'
import { graphql } from 'gatsby'
import { Intro, About, Portfolio, Layout, Contact } from '../components'

const HomePage = (props) => (
  <Layout>
    <Intro
      profile2={props.data.profile2.childImageSharp.fluid}
    />
    <About
      aboutImage={props.data.aboutImage.childImageSharp.fluid}
    />
    <Portfolio />
    <Contact />
  </Layout>
)

export const pageQuery = graphql`
  query {
    profileImage: file(relativePath: {eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    profile2: file(relativePath: {eq: "profile2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    aboutImage: file(relativePath: { eq: "gto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`

export default HomePage
