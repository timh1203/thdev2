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
      img={data.ticTacToeGame.childImageSharp.fluid}
      name={projectMainData.ticTacToeGame.name}
      desc={projectMainData.ticTacToeGame.desc}
      demo={projectMainData.ticTacToeGame.demo}
      github={projectMainData.ticTacToeGame.github}
    />
    <ProjectTemplate
      img={data.dullesBarber.childImageSharp.fluid}
      name={projectMainData.dullesBarber.name}
      desc={projectMainData.dullesBarber.desc}
      demo={projectMainData.dullesBarber.demo}
      github={projectMainData.dullesBarber.github}
    />
    <ProjectTemplate
      img={data.simonGame.childImageSharp.fluid}
      name={projectMainData.simonGame.name}
      desc={projectMainData.simonGame.desc}
      demo={projectMainData.simonGame.demo}
      github={projectMainData.simonGame.github}
    />
    <ProjectTemplate
      img={data.calculatorApp.childImageSharp.fluid}
      name={projectMainData.calculatorApp.name}
      desc={projectMainData.calculatorApp.desc}
      demo={projectMainData.calculatorApp.demo}
      github={projectMainData.calculatorApp.github}
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
    render={data => <ProjectMainAggregate data={data} />}
  />
)
