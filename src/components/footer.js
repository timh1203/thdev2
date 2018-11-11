import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <Div>
    <p>Copyright © 2018 Timothy Hoang</p>
  </Div>
)

const Div = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: 2%;
  padding: 0.5% 0;
  border-top: 3px solid black;
`

export default Footer
