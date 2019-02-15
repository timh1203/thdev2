import React from 'react'
import { graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../assets/'
import { Header, Footer, Layout } from '../components'

export default class PostTemplate extends React.Component {
  state = {
    light: false,
  }

  lightToggler = () => {
    this.setState({ light: !this.state.light })
  }

  render() {
    const { title, createdAt } = this.props.data.contentfulBlog
    const content = this.props.data.contentfulBlog.content.childMarkdownRemark
      .html

    return (
      <ThemeProvider theme={this.state.light ? lightTheme : darkTheme}>
        <Layout>
          <Div1>
            <Header lightToggler={this.lightToggler} />
            <H1a>{title}</H1a>
            <H6a>{createdAt}</H6a>
            <Div2
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
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
`
const Div2 = styled.div`
  a {
    display: block;
    color: ${props => props.theme.themeToggleButton};
  }
  p {
    font-size: 2rem;
    line-height: 1.6;
    margin: 1rem 0;
  }
  .gatsby-resp-image-image {
    margin: 1rem;
  }
`
const H1a = styled.h1`
  margin: 1rem 0;
`
const H6a = styled.h6`
  margin: 1rem 0;
`

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      id
      title
      slug
      createdAt(formatString: "MMMM DD, YYYY")
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
