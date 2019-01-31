import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>
          <GlobalStyles />
          {children}
        </div>

      </>
    )}
  />
)

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  html,body{
    /* max-width: 1280px; */
    /* margin: 0 auto; */
    width: 100%;
    font-size: 62.5%;
    text-align: center;
    font-family: 'Monserrat';
  }
  h1 {
    font-size: 3.6rem;
    font-family: 'Quicksand';
  }
  h2 {
    font-size: 3.4rem;
    font-family: 'Quicksand';
  }
  h3 {
    font-size: 3.2rem;
  }
  h4 {
    font-size: 2.8rem;
  }
  h5 {
    font-size: 2.4rem;
    font-family: 'Quicksand';
  }
  h6 {
    font-size: 2rem;
    font-family: 'Quicksand';
  }
  p {
    font-size: 1.6rem;
  }
  a {
    color: black;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  section {
    margin: 3% 0;
  }
  .tgl {
    display: none;
  }
  .tgl, .tgl:after, .tgl:before, .tgl *, .tgl *:after, .tgl *:before, .tgl + .tgl-btn {
    box-sizing: border-box;
  }
  .tgl::selection, .tgl:after::selection, .tgl:before::selection, .tgl *::selection, .tgl *:after::selection, .tgl *:before::selection, .tgl + .tgl-btn::selection {
    background: none;
  }
  .tgl + .tgl-btn {
    outline: 0;
    display: inline-block;
    width: 6rem;
    height: 3rem;
    font-size: 1.5rem;
    position: relative;
    cursor: pointer;
    user-select: none;
  }
  .tgl + .tgl-btn:after, .tgl + .tgl-btn:before {
    position: relative;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
  }
  .tgl + .tgl-btn:after {
    left: 0;
  }
  .tgl + .tgl-btn:before {
    display: none;
  }
  .tgl:checked + .tgl-btn:after {
    left: 50%;
  }
  .tgl-skewed + .tgl-btn {
    overflow: hidden;
    transform: skew(-10deg);
    backface-visibility: hidden;
    transition: all 0.2s ease;
    font-family: sans-serif;
    background: #3333ff;
  }
  .tgl-skewed + .tgl-btn:after, .tgl-skewed + .tgl-btn:before {
    transform: skew(10deg);
    display: inline-block;
    transition: all 0.2s ease;
    width: 100%;
    text-align: center;
    position: absolute;
    line-height: 2em;
    font-weight: bold;
    color: #1d1e22;
    text-shadow: 0 1px 0 rgba(0, 0, 0, .4);
  }
  .tgl-skewed + .tgl-btn:after {
    left: 100%;
    content: attr(data-tg-on);
  }
  .tgl-skewed + .tgl-btn:before {
    left: 0;
    content: attr(data-tg-off);
  }
  .tgl-skewed + .tgl-btn:active {
    background: black;
  }
  .tgl-skewed + .tgl-btn:active:before {
    left: -10%;
  }
  .tgl-skewed:checked + .tgl-btn {
    background: #ffcc00;
  }
  .tgl-skewed:checked + .tgl-btn:before {
    left: -100%;
  }
  .tgl-skewed:checked + .tgl-btn:after {
    left: 0;
  }
  .tgl-skewed:checked + .tgl-btn:active:after {
    left: 10%;
  }

  .tgl-light + .tgl-btn {
    background: black;
    border-radius: 2em;
    padding: 2px;
    transition: all 0.4s ease;
  }
  .tgl-light + .tgl-btn:after {
    border-radius: 50%;
    background: #fff;
    transition: all 0.2s ease;
  }
  .tgl-light:checked + .tgl-btn {
    background: gray;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
