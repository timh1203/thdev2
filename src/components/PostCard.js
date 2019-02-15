import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

export default props => {
  return (
    <Div1>
      <Link to={`/blog/${props.node.slug}/`}>
        <Img1 sizes={props.node.image.sizes} />
        <Div2>
          <H1a>{props.node.title}</H1a>
          <H6a>{props.node.createdAt}</H6a>
          <P1>
            {props.node.content.content.substring(0, 100)}
            ...
          </P1>
        </Div2>
      </Link>
    </Div1>
  )
}

const Div1 = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border: 2px solid ${props => props.theme.textColor};
  border-radius: 2px;
  min-height: 400px;
  width: 30%;
  margin: 1%;
  padding: 1%;
`
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${props => props.theme.textColor};
  * {
    margin: 0.5rem 0;
  }
`
const H1a = styled.h1``
const H6a = styled.h6``
const P1 = styled.p``
const Img1 = styled(Img)`
  width: 80%;
  margin: 0 auto;
  border-radius: 2px;
`
