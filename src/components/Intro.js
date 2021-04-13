import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { links } from '../assets/'

const Intro = props => (
  <Section1 id="intro">
    <Div1>
      <Image fluid={props.profile2} />
    </Div1>
    <Div2>
      <H3>
        Hi, I'm a software engineer building powerful web apps and creating web
        development content. I am a{' '}
        <A
          href={links.lambdaBadge.url}
          alt={links.lambdaBadge.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          Lambda School
        </A>{' '}
        alumnus.
      </H3>
    </Div2>
  </Section1>
)

const Section1 = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 6rem 0;
  @media (max-width: 768px) {
    margin: 5rem 0;
    flex-direction: column;
    justify-content: center;
  }
`
const Div1 = styled.div`
  width: 20%;
  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 400px) {
    width: 60%;
  }
`
const Div2 = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 85%;
    margin: 2rem 0;
  }
`

const Image = styled(Img)`
  border-radius: 50%;
  padding: 0;
  box-shadow: ${props => props.theme.imageShadow};
  @media (max-width: 768px) {
  }
  @media (max-width: 400px) {
  }
`

const H3 = styled.h3`
  font-size: 3rem;
  line-height: 2;
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
  text-decoration: none;
  border-bottom: 2px solid ${props => props.theme.underlineColor};
  &:hover {
    bottom: 3px;
    position: relative;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`

export default Intro
