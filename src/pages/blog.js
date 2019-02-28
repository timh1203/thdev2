import React from 'react'
import { graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../assets/'
import { Header, Footer, PostCard, Layout } from '../components'

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
            <Div2>
              {posts.map(({ node }) => (
                <PostCard key={node.id} node={node} />
              ))}
            </Div2>
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
  display: flex;
  @media (max-width: 400px) {
    flex-direction: column;
  }
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
          subtitle
          slug
          createdAt(formatString: "MMMM DD, YYYY")
          image {
            sizes(maxWidth: 1280) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`
