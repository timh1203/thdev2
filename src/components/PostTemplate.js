import React from 'react'
import { graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../assets/'
import { Header, Footer, Layout } from '../components'
import Parser from 'html-react-parser';

export default class PostTemplate extends React.Component {
  state = {
    light: false,
  }

  lightToggler = () => {
    this.setState({ light: !this.state.light })
  }

  render() {
    const { title, createdAt, updatedAt } = this.props.data.contentfulBlog
    const content = this.props.data.contentfulBlog.content.childMarkdownRemark.html

    console.log(this.props.data)
    return (
      <ThemeProvider theme={this.state.light ? lightTheme : darkTheme}>
        <Layout>
          <Div1>
            <Header lightToggler={this.lightToggler} />
            <H1a>{title}</H1a>
            <Div2>
              <H6a>Created: {createdAt}</H6a>
              <H6a>Updated: {updatedAt}</H6a>
            </Div2>
            <Div3>
              {Parser(content)}
            </Div3>
            <Footer />
          </Div1>
        </Layout>
      </ThemeProvider>
    )
  }
}

const Div1 = styled.div`
  padding: 0 120px;
  margin: 0 auto;
  color: ${props => props.theme.textColor};
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 0 40px;
  }
`
const Div2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  font-style: italic;
`
const Div3 = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: left;

  a {
    color: ${props => props.theme.themeToggleButton};
  }
  p {
    font-size: 2rem;
    line-height: 1.6;
    margin: 1rem 0;
  }
  img {
    display: flex;
    max-width: 100%;
    margin: 0 auto;
  }
  hr {
    margin: 3rem auto;
    width: 75%;
  }
`
const H1a = styled.h1`
  margin: 1rem 0;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.underlineColor};
`
const H6a = styled.h6`
  margin: 1rem 0;
`

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      id
      title
      subtitle
      slug
      createdAt(formatString: "MMMM DD, YYYY")
      updatedAt(formatString: "MMMM DD, YYYY")
      image {
        sizes(maxWidth: 1280) {
          ...GatsbyContentfulSizes
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
