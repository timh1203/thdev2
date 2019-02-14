import React from 'react'
import { graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../assets/'
import { Header, Footer, Posts, Layout } from '../components'

export default class BlogPage extends React.Component {
  state = {
    light: false,
  }

  lightToggler = () => {
    this.setState({ light: !this.state.light })
  }

  render() {
    const posts = this.props.data.allContentfulBlog.edges
    return (
      <ThemeProvider theme={this.state.light ? lightTheme : darkTheme}>
        <Layout>
          <Div1>
            <Header lightToggler={this.lightToggler} />
            <Posts posts={posts} />
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
`

export const pageQuery = graphql`
  query blogQuery {
    allContentfulBlog(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
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
            content
          }
        }
      }
    }
  }
`
