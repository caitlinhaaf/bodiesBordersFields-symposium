import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class LocationPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <h1>Location</h1>
        
        <div className="twoCol" style={{"margin-bottom": "2rem"}}>
            <div style={{"max-width": "300px"}}>
                <Img fluid={data.tmacLogo.childImageSharp.fluid} objectFit="cover" alt="Toronto Media Arts Centre logo."/>
            </div>
            <p style={{"font-size": "1.25rem"}}>
                Toronto Media Arts Centre
                <br/>
                32 Lisgar Street, Toronto, ON, M6J 0C9
                <br/>
                <a href="https://www.google.com/maps/place/Toronto+Media+Arts+Centre/@43.6420485,-79.4932639,12z/data=!4m18!1m12!4m11!1m3!2m2!1d-79.4220245!2d43.6478868!1m6!1m2!1s0x882b350048a4cd8f:0x1ca084cfc4618789!2storonto+media+arts+centre!2m2!1d-79.4232241!2d43.6420699!3m4!1s0x882b350048a4cd8f:0x1ca084cfc4618789!8m2!3d43.6420699!4d-79.4232241" target="_blank" rel="noopener noreferrer">View Map</a>
            </p>
        </div>
        
        <h3>Entrance</h3>
        <p>
        The main entrance can be a bit tricky to find your first time here. It is <span style={{"font-weight": "bold"}}>not directly off Lisgar</span>, but on the north side of the building facing the park. Our doors are east of the main condo entrance for 36 Lisgar.
        <br/><br/>
        From Sudbury and Lisgar, head towards Queen Street until you are at the front of the condo building.
        <br/><br/>
        Lost? Call or text (647) 689-6005 and someone will be happy to assist.
        </p>

        <h3>Accessibility</h3>
        <a href="https://policies.tomediaarts.org/procedure-manual/policies/accessibility" target="_blank" rel="noopener noreferrer">
            View Accessibility Information
        </a>

      </Layout>
    )
  }
}

export default LocationPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    tmacLogo: file(relativePath: { eq: "tmac_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`
