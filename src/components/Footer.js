import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <Div>
    <P>
      Hosted by <A1 href="https://www.netlify.com/" alt="Netlify Home">Netlify</A1>.
      Copyright © {new Date().getFullYear()} Timothy Hoang. All rights reserved.
    </P>
  </Div>
)

const Div = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: 2%;
  padding: 0.5% 0;
  border-top: ${props => props.theme.separatorColor};
  color: ${props => props.theme.textColor};
`
const P = styled.p`
  @media (max-width: 400px) {
    margin: 1rem 0;
  }
`
const A1 = styled.a`
  color: white;
`

export default Footer
