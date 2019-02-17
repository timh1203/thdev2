import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { projectAltData } from '../assets'
import { ProjectTemplate } from './'

const ProjectAltAggregate = ({ data }) => (
  <Div1>
    <ProjectTemplate
      img={data.guidr.childImageSharp.fluid}
      name={projectAltData.guidr.name}
      desc={projectAltData.guidr.desc}
      demo={projectAltData.guidr.demo}
      github={projectAltData.guidr.github}
    />
    <ProjectTemplate
      img={data.wanderlustoria.childImageSharp.fluid}
      name={projectAltData.wanderlustoria.name}
      desc={projectAltData.wanderlustoria.desc}
      demo={projectAltData.wanderlustoria.demo}
      github={projectAltData.wanderlustoria.github}
    />
    <ProjectTemplate
      img={data.ticTacToeGame.childImageSharp.fluid}
      name={projectAltData.ticTacToeGame.name}
      desc={projectAltData.ticTacToeGame.desc}
      demo={projectAltData.ticTacToeGame.demo}
      github={projectAltData.ticTacToeGame.github}
    />
    <ProjectTemplate
      img={data.dullesBarber.childImageSharp.fluid}
      name={projectAltData.dullesBarber.name}
      desc={projectAltData.dullesBarber.desc}
      demo={projectAltData.dullesBarber.demo}
      github={projectAltData.dullesBarber.github}
    />
    <ProjectTemplate
      img={data.simonGame.childImageSharp.fluid}
      name={projectAltData.simonGame.name}
      desc={projectAltData.simonGame.desc}
      demo={projectAltData.simonGame.demo}
      github={projectAltData.simonGame.github}
    />
    <ProjectTemplate
      img={data.calculatorApp.childImageSharp.fluid}
      name={projectAltData.calculatorApp.name}
      desc={projectAltData.calculatorApp.desc}
      demo={projectAltData.calculatorApp.demo}
      github={projectAltData.calculatorApp.github}
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
        simonGame: file(relativePath: { eq: "simonGame.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ticTacToeGame: file(relativePath: { eq: "ticTacToeGame.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        calculatorApp: file(relativePath: { eq: "calculatorApp.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <ProjectAltAggregate data={data} />}
  />
)
