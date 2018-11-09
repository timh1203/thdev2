import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

const HomePage = (props) => (
  <Layout>
    <section>
      <Image fluid={props.data.profileImage.childImageSharp.fluid} />
      <H3>"Graduating <A href="https://lambdaschool.com/" target="_blank">Lambda School</A> in March 2019.<br />Open to connections, not actively seeking."</H3>
      {/* <H3>"I have no special talents.<br />I am only passionately curious."</H3> */}
      {/* <Span>-Albert Einstein</Span> */}
    </section>
  </Layout>
)

const Image = styled(Img)`
  max-width: 20%;
  border-radius: 50%;
  margin: 2% auto;
  margin-top: 4rem;
  padding: 0;
`

const H3 = styled.h3`
  font-size: 4rem;
  line-height: 1.5;
`

const A = styled.a`
  font-size: 4rem;
`

// const Span = styled.span`
//   font-size: 3rem;
//   line-height: 1.5;
// `

export const pageQuery = graphql`
  query profileImage {
    profileImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default HomePage
