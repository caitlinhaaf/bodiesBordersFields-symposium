import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LogosRow from "../components/logosRow"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const currentAbout = data.allMarkdownRemark.edges[0].node

    console.log(currentAbout)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" pathname="/about"/>
        <article>
            <h1>About</h1>
            <p dangerouslySetInnerHTML={{ __html: currentAbout.html }}></p>
        </article>

        <h2>Presented By</h2>
            <LogosRow />
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {tagType: {eq: "about"}}},
      sort: { fields: [frontmatter___eventStartDate], 
      order: ASC
    }) {
    edges {
      node {
        html
        frontmatter {
          eventName
        }
      }
    }
  }
  }
`
