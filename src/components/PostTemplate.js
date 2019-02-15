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
    console.log(this.props)
    const { title, createdAt, image, content } = this.props.data.contentfulBlog

    return (
      <ThemeProvider theme={this.state.light ? lightTheme : darkTheme}>
        <Layout>
          <Div1>
            <Header lightToggler={this.lightToggler} />
            <p>test2</p>
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
        content
      }
    }
  }
`
