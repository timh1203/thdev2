import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { projectAltData } from '../assets'
import { ProjectTemplate } from './'

const ProjectAltAggregate = ({ data }) => (
  <Div1>
    <ProjectTemplate
      img={data.ticTacToeGame.childImageSharp.fluid}
      name={projectAltData.ticTacToeGame.name}
      desc={projectAltData.ticTacToeGame.desc}
      demo={projectAltData.ticTacToeGame.demo}
      github={projectAltData.ticTacToeGame.github}
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
    <ProjectTemplate
      img={data.respondezApp.childImageSharp.fluid}
      name={projectAltData.respondezApp.name}
      desc={projectAltData.respondezApp.desc}
      demo={projectAltData.respondezApp.demo}
      github={projectAltData.respondezApp.github}
    />
    <ProjectTemplate
      img={data.pomodoroApp.childImageSharp.fluid}
      name={projectAltData.pomodoroApp.name}
      desc={projectAltData.pomodoroApp.desc}
      demo={projectAltData.pomodoroApp.demo}
      github={projectAltData.pomodoroApp.github}
    />
    <ProjectTemplate
      img={data.twitchApp.childImageSharp.fluid}
      name={projectAltData.twitchApp.name}
      desc={projectAltData.twitchApp.desc}
      demo={projectAltData.twitchApp.demo}
      github={projectAltData.twitchApp.github}
    />
    <ProjectTemplate
      img={data.wikipediaApp.childImageSharp.fluid}
      name={projectAltData.wikipediaApp.name}
      desc={projectAltData.wikipediaApp.desc}
      demo={projectAltData.wikipediaApp.demo}
      github={projectAltData.wikipediaApp.github}
    />
    <ProjectTemplate
      img={data.weatherApp.childImageSharp.fluid}
      name={projectAltData.weatherApp.name}
      desc={projectAltData.weatherApp.desc}
      demo={projectAltData.weatherApp.demo}
      github={projectAltData.weatherApp.github}
    />
    <ProjectTemplate
      img={data.photographySite.childImageSharp.fluid}
      name={projectAltData.photographySite.name}
      desc={projectAltData.photographySite.desc}
      demo={projectAltData.photographySite.demo}
      github={projectAltData.photographySite.github}
    />
    <ProjectTemplate
      img={data.turtleDash.childImageSharp.fluid}
      name={projectAltData.turtleDash.name}
      desc={projectAltData.turtleDash.desc}
      demo={projectAltData.turtleDash.demo}
      github={projectAltData.turtleDash.github}
    />
    <ProjectTemplate
      img={data.quoteMachine.childImageSharp.fluid}
      name={projectAltData.quoteMachine.name}
      desc={projectAltData.quoteMachine.desc}
      demo={projectAltData.quoteMachine.demo}
      github={projectAltData.quoteMachine.github}
    />
    <ProjectTemplate
      img={data.travelersChecklist.childImageSharp.fluid}
      name={projectAltData.travelersChecklist.name}
      desc={projectAltData.travelersChecklist.desc}
      demo={projectAltData.travelersChecklist.demo}
      github={projectAltData.travelersChecklist.github}
    />
    <ProjectTemplate
      img={data.vzSuites.childImageSharp.fluid}
      name={projectAltData.vzSuites.name}
      desc={projectAltData.vzSuites.desc}
      demo={projectAltData.vzSuites.demo}
      github={projectAltData.vzSuites.github}
    />
    <ProjectTemplate
      img={data.sightseeWithMe.childImageSharp.fluid}
      name={projectAltData.sightseeWithMe.name}
      desc={projectAltData.sightseeWithMe.desc}
      demo={projectAltData.sightseeWithMe.demo}
      github={projectAltData.sightseeWithMe.github}
    />
    <ProjectTemplate
      img={data.talkOfTheTown.childImageSharp.fluid}
      name={projectAltData.talkOfTheTown.name}
      desc={projectAltData.talkOfTheTown.desc}
      demo={projectAltData.talkOfTheTown.demo}
      github={projectAltData.talkOfTheTown.github}
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
        respondezApp: file(relativePath: { eq: "respondezApp.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pomodoroApp: file(relativePath: { eq: "pomodoroApp.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        twitchApp: file(relativePath: { eq: "twitchApp.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wikipediaApp: file(relativePath: { eq: "wikipediaApp.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        weatherApp: file(relativePath: { eq: "weatherApp.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        photographySite: file(relativePath: { eq: "photographySite.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        turtleDash: file(relativePath: { eq: "turtleDash.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        quoteMachine: file(relativePath: { eq: "quoteMachine.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        travelersChecklist: file(
          relativePath: { eq: "travelersChecklist.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vzSuites: file(
          relativePath: { eq: "vzSuites.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sightseeWithMe: file(
          relativePath: { eq: "sightseeWithMe.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        talkOfTheTown: file(
          relativePath: { eq: "talkOfTheTown.png" }
        ) {
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
