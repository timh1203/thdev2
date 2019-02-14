import React from 'react'
import { graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../assets/'
import { Header, Footer, Layout } from '../components'

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
            {posts.map(post => (
              <Div2 key={post.node.id}>
                <h1>{post.node.title}</h1>
                <h6>{post.node.createdAt}</h6>
                <h6>Topics: {post.node.slug}</h6>
                <p>{post.node.content.content}</p>
              </Div2>
            ))}
            <Footer />
          </Div1>
        </Layout>
      </ThemeProvider>
    )
  }
}

const Div1 = styled.div`
  background: ${props => props.theme.backgroundColor};
  padding: 0 120px;
  margin: 0 auto;
  height: 100vh;
`
const Div2 = styled.div`
  margin: 5rem 0;
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
            resolutions(width: 300) {
              ...GatsbyContentfulResolutions
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
