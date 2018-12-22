import React from 'react'
import styled from 'styled-components'
import { projectsData } from '../assets'

const Portfolio = (props) => (
  <section id="portfolio">
    <H1>Portfolio</H1>
    <Hr id="divider" />
    <Div1>
      {projectsData.map((project, key) => {
        return (
          <Div2 key={key}>
            <H1>{project.name}</H1>
            <P1>{project.desc}</P1>
            <A1 href={project.demo}>
              <P1>Demo</P1>
            </A1>
            <A1 href={project.github}>
              <P1>Github</P1>
            </A1>
          </Div2>
        )
      })}
    </Div1>
  </section>
)

const H1 = styled.h1`
`
const P1 = styled.p`
`
const A1 = styled.a`
`
const Hr = styled.hr`
`
const Div1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Div2 = styled.div`
  border: 3px solid black;
  box-shadow: 1px 1px 10px black;
  width: 28%;
  margin: 1%;
  padding: 1%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default Portfolio
