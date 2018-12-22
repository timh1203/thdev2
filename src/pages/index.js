import React from 'react'
import { graphql } from 'gatsby'
import { Intro, About, Portfolio, Layout, Contact } from '../components'

const HomePage = (props) => (
  <Layout>
    <Intro
      profileImage={props.data.profileImage.childImageSharp.fluid}
    />
    <About
      aboutImage={props.data.aboutImage.childImageSharp.fluid}
    />
    <Portfolio
      projectsGallery={props.data.projectsGallery.edges}
    />
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
    aboutImage: file(relativePath: { eq: "gto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    projectsGallery: allFile(filter: {extension: {regex: "/(jpg)|(png)/"}, relativeDirectory: {eq: "projectsGallery"}}) {
      edges {
        node {
          id
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    },
  }
`

export default HomePage
