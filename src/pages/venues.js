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
        <SEO title="All posts" />
        <h1>Venues</h1>
        
        {
          venues.map(({node}, i) => (
            <>
              <h3 className="alt">{node.frontmatter.eventTitle}</h3>
              <div className="twoCol" style={{padding: `2rem 0`, borderBottom: `1px solid #CCCCCC`}}>
                <div style={{"max-width": "200px"}}>
                   <img src={node.frontmatter.logo} alt={`${node.frontmatter.name} logo`}/>
                </div>

                <div>
                  <h4>{node.frontmatter.name}</h4>
                  <p className="noMargin" dangerouslySetInnerHTML={{ __html: node.html }} ></p>
                </div>
                
              </div>

            </>
          ))
        }
        {/* <h3 className="alt">Symposium 22-24 Nov 2019</h3>
        <div className="twoCol" style={{padding: `2rem 0`, borderBottom: `1px solid #CCCCCC`}}>
            <div style={{"max-width": "200px"}}>
                <Img fluid={data.orLogo.childImageSharp.fluid} objectFit="cover" alt="Toronto Media Arts Centre logo."/>
            </div>
            <div>
                <h4>Or Gallery</h4>
                <p style={{fontSize: `1.25rem`, marginBottom: `0rem`}}>
                    32 Lisgar Street, Toronto, ON, M6J 0C9
                    <br/>
                    <a href="https://www.google.com/maps/place/Toronto+Media+Arts+Centre/@43.6420485,-79.4932639,12z/data=!4m18!1m12!4m11!1m3!2m2!1d-79.4220245!2d43.6478868!1m6!1m2!1s0x882b350048a4cd8f:0x1ca084cfc4618789!2storonto+media+arts+centre!2m2!1d-79.4232241!2d43.6420699!3m4!1s0x882b350048a4cd8f:0x1ca084cfc4618789!8m2!3d43.6420699!4d-79.4232241" target="_blank" rel="noopener noreferrer">
                        View Map
                    </a>
                    <br/>
                    <a href="https://policies.tomediaarts.org/procedure-manual/policies/accessibility" target="_blank" rel="noopener noreferrer">
                        View Accessibility Information
                    </a>
                </p>
            </div>
        </div> */}

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
