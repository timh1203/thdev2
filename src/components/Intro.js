import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Intro = props => (
  <Section1 id="intro">
    <Image fluid={props.profile2} />
    <Div1>
      <H3>Hi, I'm Tim!</H3>
      <H3>I love building powerful web apps that solve real problems.</H3>
      <H3>
        I am a {' '}
        <A href="https://lambdaschool.com/" target="_blank">
          Lambda School
      </A>
        {' '} alumnus.
      </H3>
      {/* <H3>"I have no special talents.<br />I am only passionately curious."</H3> */}
      {/* <Span>-Albert Einstein</Span> */}
    </Div1>
  </Section1>
)

const Section1 = styled.section`
  margin: 5rem 0;
`
const Div1 = styled.div`
  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`

const Image = styled(Img)`
  max-width: 20%;
  border-radius: 50%;
  margin: 2% auto;
  padding: 0;
  box-shadow: ${props => props.theme.imageShadow};
  @media (max-width: 768px) {
    max-width: 50%;
  }
  @media (max-width: 400px) {
    max-width: 80%;
  }
`

const H3 = styled.h3`
  font-size: 3rem;
  line-height: 1.5;
  color: ${props => props.theme.textColor};
  @media (max-width: 768px) {
   font-size: 2.5rem;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`

const A = styled.a`
  font-size: 3rem;
  color: ${props => props.theme.textColor};
  @media (max-width: 768px) {
   font-size: 2.5rem;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`

export default Intro
