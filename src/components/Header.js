import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { links } from '../assets/'

const Header = props => (
  <Div>
    <Div1>
      <H1>Timothy Hoang</H1>
      {/* <H6>Full Stack Developer</H6> */}
      {/* <H6>Austin, Texas</H6> */}
    </Div1>

    <Div2>
      {/* <Link1 to="#intro">Home</Link1> */}
      <A
        href={links.resume.url}
        alt={links.resume.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </A>
      <Link1 to="#portfolio">Portfolio</Link1>
      <Link1 to="#about">About</Link1>
      <Link1 to="#contact">Contact</Link1>
      <Link1 to="/blog">Blog</Link1>
    </Div2>

    <Div3>
      <a
        href={links.github.url}
        alt={links.github.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub1 />
      </a>
      <a
        href={links.linkedIn.url}
        alt={links.linkedIn.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn1 />
      </a>
      <a
        href={links.twitter.url}
        alt={links.twitter.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter1 />
      </a>
      {/* <a
        href={links.medium.url}
        alt={links.medium.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMedium1 />
      </a> */}
      {/* <a
        href={links.freeCodeCamp.url}
        alt={links.freeCodeCamp.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFreeCodeCamp1 />
      </a> */}
      {/* <Span1 role="img" aria-label="dark">🌚</Span1> */}
      <input
        className="tgl tgl-skewed"
        onClick={() => props.lightToggler()}
        id="cb3"
        type="checkbox"
      />
      <label
        className="tgl-btn"
        data-tg-off="DARK"
        data-tg-on="LIGHT"
        htmlFor="cb3"
      />
      {/* <input onClick={() => props.lightToggler()} className="tgl tgl-light" id="cb1" type="checkbox" />
      <label className="tgl-btn" htmlFor="cb1"></label> */}
      {/* <Span1 role="img" aria-label="light">🌞</Span1> */}
    </Div3>
  </Div>
)

const Div = styled.div`
  border-bottom: ${props => props.theme.separatorColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Div1 = styled.div`
  margin-bottom: 1rem;
  flex: 1 1 30%;
`
const Div2 = styled.div`
  display: flex;
  margin-bottom: 1rem;
  flex: 1 1 40%;
  line-height: 2;
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 400px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`
const Div3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  flex: 1 1 30%;
`
// const Div4 = styled.div`
// `
// const Span1 = styled.span`
//   font-size: 2rem;
// `
const A = styled.a`
  font-size: 2rem;
  margin: 0 1rem;
  font-family: 'Quicksand';
  color: ${props => props.theme.textColor};
  text-decoration: none;
  border-radius: 5px;
  padding: 0 0.5rem;
  border-top: ${props => props.theme.yBorderColor};
  border-bottom: ${props => props.theme.yBorderColor};
  border-left: ${props => props.theme.xBorderColor};
  border-right: ${props => props.theme.xBorderColor};
  :hover {
    border-top: ${props => props.theme.xBorderColor};
    border-bottom: ${props => props.theme.xBorderColor};
    border-left: ${props => props.theme.yBorderColor};
    border-right: ${props => props.theme.yBorderColor};
  }
  @media (max-width: 400px) {
    margin: 0.5rem 0;
  }
`
const Link1 = styled(Link)`
  font-size: 2rem;
  margin: 0 1rem;
  font-family: 'Quicksand';
  color: ${props => props.theme.textColor};
  text-decoration: none;
  border-radius: 5px;
  padding: 0 0.5rem;
  border-top: ${props => props.theme.yBorderColor};
  border-bottom: ${props => props.theme.yBorderColor};
  border-left: ${props => props.theme.xBorderColor};
  border-right: ${props => props.theme.xBorderColor};
  :hover {
    border-top: ${props => props.theme.xBorderColor};
    border-bottom: ${props => props.theme.xBorderColor};
    border-left: ${props => props.theme.yBorderColor};
    border-right: ${props => props.theme.yBorderColor};
  }
  @media (max-width: 400px) {
    margin: 0.5rem 0;
  }
`
const H1 = styled.h1`
  margin: 1rem 0;
  color: ${props => props.theme.textColor};
`
// const H6 = styled.h6`
//   font-weight: 500;
//   margin: 1rem 0;
//   color: ${props => props.theme.textColor};
// `
const FaGithub1 = styled(FaGithub)`
  color: white;
  background: #24292e;
  border-radius: 2px;
  width: 40px;
  height: 40px;
  margin: 0 2rem;
  :hover {
    box-shadow: 3px 3px 3px ${props => props.theme.textColor};
  }
`
const FaLinkedinIn1 = styled(FaLinkedinIn)`
  color: white;
  /* background: #0077b5; */
  border-radius: 2px;
  width: 40px;
  height: 40px;
  margin: 0 2rem;
  :hover {
    box-shadow: 3px 3px 3px ${props => props.theme.textColor};
  }
`
const FaTwitter1 = styled(FaTwitter)`
  color: white;
  /* background: #1c9bea; */
  border-radius: 2px;
  width: 41px;
  height: 41px;
  margin: 0 2rem;
  :hover {
    box-shadow: 3px 3px 3px ${props => props.theme.textColor};
  }
`
// const FaMedium1 = styled(FaMedium)`
//   color: #13c164;
//   background: #f7f7f7;
//   border-radius: 2px;
//   width: 47px;
//   height: 47px;
//   margin: 0 2rem;
//   :hover {
//     box-shadow: 3px 3px 3px ${props => props.theme.textColor};
//   }
// `
// const FaFreeCodeCamp1 = styled(FaFreeCodeCamp)`
//   color: white;
//   background: #006100;
//   border-radius: 2px;
//   width: 50px;
//   height: 50px;
//   margin: 0 2rem;
//   :hover {
//     box-shadow: 3px 3px 3px ${props => props.theme.textColor};
//   }
// `

export default Header
