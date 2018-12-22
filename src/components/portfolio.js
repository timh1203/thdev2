import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { projectsData } from '../assets'

class Portfolio extends React.Component {
  // const projectsNames = ["wanderlustoria", "simonGame", "ticTacToe", "dullesBarber"]

  render() {
    const projectImages = this.props.projectsGallery.map(pic => (
      <Div3 key={pic.node.id}>
        <Img1
          fluid={pic.node.childImageSharp.fluid}
        />
      </Div3>
    ))
    return (
      <section id="portfolio">
        <H1>Portfolio</H1>
        <Hr id="divider" />
        <Div1>
          {projectsData.map((project, key) => {
            return (
              <Div2 key={key}>
                {projectImages}
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
  }
}

const Div1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid black;
  box-shadow: 1px 1px 10px black;
  width: 28%;
  margin: 1%;
  padding: 1%;
`
const Div3 = styled.div`
`
const H1 = styled.h1`
`
const P1 = styled.p`
`
const A1 = styled.a`
`
const Hr = styled.hr`
`
const Img1 = styled(Img)`
`

export default Portfolio
