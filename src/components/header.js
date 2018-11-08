import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = () => (
  <section>
    <h1>Timothy Hoang</h1>
    <h2>Full Stack Developer</h2>
    <h3>Houston, Texas</h3>

    <div>
      <FaGithub1 />
      <FaLinkedin1 />
      <FaTwitter1 />
      {/* <FaFreeCodeCamp1 /> */}
      {/* <FaMedium1 /> */}
    </div>

    <div>
      <Link to="#">Home</Link>
      <Link to="#">About</Link>
      <Link to="#">Portfolio</Link>
      <Link to="#">Contact</Link>
    </div>
  </section>
)

const FaGithub1 = styled(FaGithub)`
  color: white;
  background: #24292E;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  `
const FaLinkedin1 = styled(FaLinkedin)`
  color: white;
  background: #0077B5;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  `
const FaTwitter1 = styled(FaTwitter)`
  color: white;
  background: #1C9BEA;
  border-radius: 2px;
  width: 50px;
  height: 50px;
`
// const FaFreeCodeCamp1 = styled(FaFreeCodeCamp)`
//   color: white;
//   background: #006100;
//   border-radius: 2px;
//   width: 50px;
//   height: 50px;
//   `
// const FaMedium1 = styled(FaMedium)`
//   color: #13C164;
//   background: #F7F7F7;
//   border-radius: 2px;
//   width: 50px;
//   height: 50px;
//   `

export default Header
