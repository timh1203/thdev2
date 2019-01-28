import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <Div>
    <P>Copyright © 2019 Timothy Hoang</P>
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
`

export default Footer
