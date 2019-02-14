import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

export default props => {
  return (
    <>
      {props.posts.map(post => (
        <Div1 key={post.node.id}>
          <Img1 sizes={post.node.image.sizes} />
          <h1>{post.node.title}</h1>
          <h6>{post.node.createdAt}</h6>
          <p>{post.node.content.content}</p>
        </Div1>
      ))}
    </>
  )
}

const Div1 = styled.div`
  margin: 5rem 0;
`
const Img1 = styled(Img)`
  width: 20%;
  margin: 0 auto;
`
