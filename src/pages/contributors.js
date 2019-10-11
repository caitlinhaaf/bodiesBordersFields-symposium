import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContributorTile from "../components/contributorTile"

class ContributorsPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const contributors = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <h1>Contributors</h1>

        <div className="twoCol">

          {
              contributors.map(({node}, i) => (
                  <ContributorTile
                    key={i}
                    firstName={node.frontmatter.firstName}
                    lastName={node.frontmatter.lastName}
                    role={node.frontmatter.role}
                    headshot={node.frontmatter.headshot}
                    bio={node.html}
                  />
              ))
          }

        </div>


      </Layout>
    )
  }
}

export default ContributorsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___lastName], order: ASC }) {
      edges {
        node {
          html
          frontmatter {
            firstName
            lastName
            role
            headshot
          }
        }
      }
    }
  }
`
