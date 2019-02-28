import React from 'react'
import { graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import {
  Header,
  Intro,
  About,
  Portfolio,
  Layout,
  Contact,
  Footer,
} from '../components'
import { lightTheme, darkTheme } from '../assets/'

export default class HomePage extends React.Component {
  state = {
    light: false,
  }

  lightToggler = () => {
    this.setState({ light: !this.state.light })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.light ? lightTheme : darkTheme}>
        <Layout>
          <Div1>
            <Header lightToggler={this.lightToggler} />
            <Intro profile2={this.props.data.profile2.childImageSharp.fluid} />
            <Portfolio />
            <About
              aboutImage={this.props.data.aboutImage.childImageSharp.fluid}
            />
            <Contact />
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
`

export const pageQuery = graphql`
  query {
    profileImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    profile2: file(relativePath: { eq: "profile2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutImage: file(relativePath: { eq: "gto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
