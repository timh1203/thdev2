import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Intro = (props) => (
  <section id="intro">
    <Image fluid={props.profile2} />
    <H3>Hi, I'm Tim!</H3>
    <H3>I love building powerful web apps that solve real problems.</H3>
    <H3>Graduating <A href="https://lambdaschool.com/" target="_blank">Lambda School</A> in March 2019.</H3>
    {/* <H3>"I have no special talents.<br />I am only passionately curious."</H3> */}
    {/* <Span>-Albert Einstein</Span> */}
  </section>
)

const Image = styled(Img)`
  max-width: 20%;
  border-radius: 50%;
  margin: 2% auto;
  padding: 0;
`

const H3 = styled.h3`
  font-size: 3rem;
  line-height: 1.5;
`

const A = styled.a`
  font-size: 3rem;
`

export default Intro
