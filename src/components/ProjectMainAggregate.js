import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { projectsMainData } from '../assets'
import { ProjectTemplate } from './'

const ProjectMainAggregate = ({ data }) => (
  <Div1>
    <ProjectTemplate
      img={data.guidr.childImageSharp.fluid}
      name={projectsMainData.guidr.name}
      desc={projectsMainData.guidr.desc}
      demo={projectsMainData.guidr.demo}
      github={projectsMainData.guidr.github}
    />
    <ProjectTemplate
      img={data.wanderlustoria.childImageSharp.fluid}
      name={projectsMainData.wanderlustoria.name}
      desc={projectsMainData.wanderlustoria.desc}
      demo={projectsMainData.wanderlustoria.demo}
      github={projectsMainData.wanderlustoria.github}
    />
    <ProjectTemplate
      img={data.ticTacToeGame.childImageSharp.fluid}
      name={projectsMainData.ticTacToeGame.name}
      desc={projectsMainData.ticTacToeGame.desc}
      demo={projectsMainData.ticTacToeGame.demo}
      github={projectsMainData.ticTacToeGame.github}
    />
    <ProjectTemplate
      img={data.dullesBarber.childImageSharp.fluid}
      name={projectsMainData.dullesBarber.name}
      desc={projectsMainData.dullesBarber.desc}
      demo={projectsMainData.dullesBarber.demo}
      github={projectsMainData.dullesBarber.github}
    />
    <ProjectTemplate
      img={data.simonGame.childImageSharp.fluid}
      name={projectsMainData.simonGame.name}
      desc={projectsMainData.simonGame.desc}
      demo={projectsMainData.simonGame.demo}
      github={projectsMainData.simonGame.github}
    />
    <ProjectTemplate
      img={data.calculatorApp.childImageSharp.fluid}
      name={projectsMainData.calculatorApp.name}
      desc={projectsMainData.calculatorApp.desc}
      demo={projectsMainData.calculatorApp.demo}
      github={projectsMainData.calculatorApp.github}
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
