import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import About from '../components/About'
import Portfolio from '../components/Portfolio'

const HomePage = (props) => (
  <Layout>
    <Intro
      profileImage={props.data.profileImage.childImageSharp.fluid}
    />
    <About
      aboutImage={props.data.aboutImage.childImageSharp.fluid}
    />
    <Portfolio />
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
  }
  aboutImage: file(relativePath: { eq: "gto.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default HomePage
