import React, { useState } from 'react'
import styled from 'styled-components'
import { ProjectMainAggregate, ProjectAltAggregate } from './'

export default function Portfolio() {
  const [isAllShowing, setAllShowing] = useState(false)
  const toggle = () => setAllShowing(!isAllShowing)

  return (
    <Section1 id="portfolio">
      <H1>Portfolio</H1>
      <Hr1 />
      <ProjectMainAggregate />
      {isAllShowing ? <ProjectAltAggregate /> : null}
      <Button1 type="text" onClick={toggle}>
        {isAllShowing ? 'See less' : 'See more'}
      </Button1>
    </Section1>
  )
}

const Section1 = styled.section`
  color: ${props => props.theme.textColor};
`
const H1 = styled.h1``
const Hr1 = styled.hr`
  border-color: ${props => props.theme.textColor};
`
const Button1 = styled.button`
  width: 20%;
  font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  outline: none;
  color: ${props => props.theme.themeToggleButton};
  background: ${props => props.theme.buttonBackground};
  border: 2px solid ${props => props.theme.buttonBorder};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.themeToggleButton};
    border: 2px solid ${props => props.theme.textColor};
  }
  @media (max-width: 400px) {
    width: 30%;
  }
`
