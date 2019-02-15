import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

export default props => {
  return (
    <Div1>
      {props.posts.map(({ node }) => (
        <Div2 key={node.id}>
          <Link to={`/blog/${node.slug}/`}>
            <Img1 sizes={node.image.sizes} />
            <Div3>
              <h1>{node.title}</h1>
              <h6>{node.createdAt}</h6>
              <p>
                {node.content.content.substring(0, 100)}
                ...
              </p>
            </Div3>
          </Link>
        </Div2>
      ))}
    </Div1>
  )
}

const Div1 = styled.div`
  display: flex;
`
const Div2 = styled.div`
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
const Div3 = styled.div``
const Img1 = styled(Img)`
  width: 100%;
  margin: 0 auto;
  border-radius: 2px;
`
