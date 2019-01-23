import React from 'react'
import styled from 'styled-components'
import { ProjectAggregate } from './'

const Portfolio = () => (
  <Section1 id="portfolio">
    <H1>Portfolio</H1>
    <Hr1 />
    <ProjectAggregate />
  </Section1>
)

const Section1 = styled.section`
`
const H1 = styled.h1`
`
const Hr1 = styled.hr`
`

export default Portfolio