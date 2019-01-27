import React from 'react'
import { graphql } from 'gatsby'
import {
  Header,
  Intro,
  About,
  Portfolio,
  Layout,
  Contact,
  Footer
} from '../components'

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Intro
          profile2={this.props.data.profile2.childImageSharp.fluid}
        />
        <About
          aboutImage={this.props.data.aboutImage.childImageSharp.fluid}
        />
        <Portfolio />
        <Contact />
        <Footer />
      </Layout>
    )
  }
}

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
