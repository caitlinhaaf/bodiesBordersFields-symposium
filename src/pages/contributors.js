import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContributorTile from "../components/contributorTile"

class ContributorsPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const contributors = data.allMarkdownRemark.edges.sort((a, b) => {
      const keyA = a.node.frontmatter.lastName.toLowerCase();
      const keyB = b.node.frontmatter.lastName.toLowerCase();
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
    })
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contributors" pathname="/contributors"/>
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
    allMarkdownRemark(
      filter: {frontmatter: {tagType: {eq: "contributor"}}}) {
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
