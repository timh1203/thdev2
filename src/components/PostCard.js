import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

export default props => {
  const { title, subtitle, createdAt, slug } = props.node
  const { sizes, description } = props.node.image
  const { excerpt } = props.node.content.childMarkdownRemark
  return (
    <Div1>
      <Link1 to={`/blog/${slug}/`}>
        <Div2>
          <Div3>
            <Img1 alt={description} sizes={sizes} />
          </Div3>
          <Div4>
            <H1a>{title}</H1a>
            <H4a>{createdAt}</H4a>
            <H6a>{subtitle}</H6a>
            <P1>{excerpt}</P1>
          </Div4>
        </Div2>
      </Link1>
    </Div1>
  )
}

const Div1 = styled.div`
  width: 70%;
  margin: 0 auto;
  border-bottom: 2px solid ${props => props.theme.textColor};
`
const Div2 = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem auto;
  /* @media (max-width: 768px) {
    width: 45%;
    margin: 1rem auto;
  }
  @media (max-width: 400px) {
    width: 96%;
    min-height: 350px;
  } */ */
`
const Div3 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`
const Div4 = styled.div`
  width: 60%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-around;
  color: ${props => props.theme.textColor};
  * {
    width: 100%;
  }
`
const H1a = styled.h1`
  /* border-bottom: 2px solid ${props => props.theme.underlineColor}; */
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.underlineColor};
  /* @media (max-width: 768px) {
    font-size: 2.5rem;
  } */
`
const H4a = styled.h4`
`
const H6a = styled.h6`
  font-style: italic;
  /* @media (max-width: 768px) {
    font-size: 1.5rem;
  } */
`
const P1 = styled.p`
`
const Img1 = styled(Img)`
  min-width: 300px;
  max-width: 300px;
`
const Link1 = styled(Link)`
`
