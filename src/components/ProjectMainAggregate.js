import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { projectMainData } from '../assets'
import { ProjectTemplate } from './'

const ProjectMainAggregate = ({ data }) => (
  <Div1>
    <ProjectTemplate
      img={data.guidr.childImageSharp.fluid}
      name={projectMainData.guidr.name}
      desc={projectMainData.guidr.desc}
      demo={projectMainData.guidr.demo}
      github={projectMainData.guidr.github}
    />
    <ProjectTemplate
      img={data.wanderlustoria.childImageSharp.fluid}
      name={projectMainData.wanderlustoria.name}
      desc={projectMainData.wanderlustoria.desc}
      demo={projectMainData.wanderlustoria.demo}
      github={projectMainData.wanderlustoria.github}
    />
    <ProjectTemplate
      img={data.dullesBarber.childImageSharp.fluid}
      name={projectMainData.dullesBarber.name}
      desc={projectMainData.dullesBarber.desc}
      demo={projectMainData.dullesBarber.demo}
      github={projectMainData.dullesBarber.github}
    />

    <ProjectTemplate
      img={data.derikJones.childImageSharp.fluid}
      name={projectMainData.derikJones.name}
      desc={projectMainData.derikJones.desc}
      demo={projectMainData.derikJones.demo}
      github={projectMainData.derikJones.github}
    />
  </Div1>
)

const Div1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        guidr: file(relativePath: { eq: "guidr.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wanderlustoria: file(relativePath: { eq: "wanderlustoria.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        dullesBarber: file(relativePath: { eq: "dullesBarber.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        derikJones: file(relativePath: { eq: "derikJones.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <ProjectMainAggregate data={data} />}
  />
)
