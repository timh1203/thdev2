import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { projectsData } from '../assets'
import { ProjectTemplate } from './'

const ProjectsAggregate = ({ data }) => (
  <Div1>
    <ProjectTemplate
      img={data.guidr.childImageSharp.fluid}
      name={projectsData.guidr.name}
      desc={projectsData.guidr.desc}
      demo={projectsData.guidr.demo}
      github={projectsData.guidr.github}
    />
    <ProjectTemplate
      img={data.wanderlustoria.childImageSharp.fluid}
      name={projectsData.wanderlustoria.name}
      desc={projectsData.wanderlustoria.desc}
      demo={projectsData.wanderlustoria.demo}
      github={projectsData.wanderlustoria.github}
    />
    <ProjectTemplate
      img={data.ticTacToeGame.childImageSharp.fluid}
      name={projectsData.ticTacToeGame.name}
      desc={projectsData.ticTacToeGame.desc}
      demo={projectsData.ticTacToeGame.demo}
      github={projectsData.ticTacToeGame.github}
    />
    <ProjectTemplate
      img={data.dullesBarber.childImageSharp.fluid}
      name={projectsData.dullesBarber.name}
      desc={projectsData.dullesBarber.desc}
      demo={projectsData.dullesBarber.demo}
      github={projectsData.dullesBarber.github}
    />
    <ProjectTemplate
      img={data.simonGame.childImageSharp.fluid}
      name={projectsData.simonGame.name}
      desc={projectsData.simonGame.desc}
      demo={projectsData.simonGame.demo}
      github={projectsData.simonGame.github}
    />
    <ProjectTemplate
      img={data.calculatorApp.childImageSharp.fluid}
      name={projectsData.calculatorApp.name}
      desc={projectsData.calculatorApp.desc}
      demo={projectsData.calculatorApp.demo}
      github={projectsData.calculatorApp.github}
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
    render={data => <ProjectsAggregate data={data} />}
  />
)
