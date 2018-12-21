import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import { Header, Footer } from './'

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
          <Header />
          {children}
          <Footer />
        </div>

        <GlobalStyles />
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
    max-width: 1280px;
    width: 100%;
    font-size: 62.5%;
    text-align: center;
    margin: 0 auto;
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
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
