import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class VenuesPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const venues = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Venues" pathname="/venues"/>
        <h1>Venues</h1>
        
        {
          venues.map(({node}, i) => (
            <div key={i}>
              <h3 className="alt">{node.frontmatter.eventTitle}</h3>
              <div className="twoCol" 
                style={{
                  padding: `2rem 0`, 
                  // borderBottom: `1px solid #CCCCCC`
                  }}>
                <div style={{maxWidth: `20rem`}}>
                   <img src={node.frontmatter.logo} alt={`${node.frontmatter.name} logo`}/>
                </div>

                <div>
                  <h4>{node.frontmatter.name}</h4>
                  <p className="noMargin" dangerouslySetInnerHTML={{ __html: node.html }} ></p>
                </div>
                
              </div>

            </div>
          ))
        }
      </Layout>
    )
  }
}

export default VenuesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {tagType: {eq: "venue"}}},
      sort: { fields: [frontmatter___lastName], 
      order: ASC 
      }) {
      edges {
        node {
          html
          frontmatter {
            eventTitle
            name
            logo
          }
        }
      }
    }
  }
`
