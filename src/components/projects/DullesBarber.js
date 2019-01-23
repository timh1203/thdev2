import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { projectsData } from '../../assets'
import styled from 'styled-components'
import Img from 'gatsby-image'

const DullesBarber = ({ data }) => (
  <Div>
    <A1 href={projectsData.dullesBarber.demo} target="_blank">
      <Img1 fluid={data.dullesBarberImage.childImageSharp.fluid} />
    </A1>
    <H1a>{projectsData.dullesBarber.name}</H1a>
    <P1>{projectsData.dullesBarber.desc}</P1>

    <Div1>
      <A1 href={projectsData.dullesBarber.demo} target="_blank">
        <P1>Demo</P1>
      </A1>
      <A1 href={projectsData.dullesBarber.github} target="_blank">
        <P1>Github</P1>
      </A1>
    </Div1>
  </Div>
)

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid black;
  box-shadow: 1px 1px 10px black;
  min-height: 400px;
  width: 28%;
  margin: 1%;
  padding: 1%;
`
const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
`
const H1a = styled.h1`
`
const P1 = styled.p`
`
const A1 = styled.a`
`
const Img1 = styled(Img)`
`

export default () => (
  <StaticQuery
    query={graphql`
        query {
          dullesBarberImage: file(relativePath: { eq: "dullesBarber.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
              }
            }
          },
        }
    `}
    render={data => <DullesBarber data={data} />}
  />
)