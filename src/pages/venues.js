import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class VenuesPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <h1>Venues</h1>
        
        <h3 className="alt">Symposium 22-24 Nov 2019</h3>
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
        </div>

        <div className="twoCol"  style={{padding: `2rem 0`, borderBottom: `1px solid #CCCCCC`}}>
            <div style={{"max-width": "200px"}}>
                <Img fluid={data.tmacLogo.childImageSharp.fluid} objectFit="cover" alt="Toronto Media Arts Centre logo."/>
            </div>
            <div>
                <h4>Toronto Media Arts Centre</h4>
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
        </div>
        
        {/* <h2>Entrance</h2>
        <p>
        The main entrance can be a bit tricky to find your first time here. It is <span style={{"font-weight": "bold"}}>not directly off Lisgar</span>, but on the north side of the building facing the park. Our doors are east of the main condo entrance for 36 Lisgar.
        <br/><br/>
        From Sudbury and Lisgar, head towards Queen Street until you are at the front of the condo building.
        <br/><br/>
        Lost? Call or text (647) 689-6005 and someone will be happy to assist.
        </p> */}

        {/* <h2>Accessibility</h2>
        <a href="https://policies.tomediaarts.org/procedure-manual/policies/accessibility" target="_blank" rel="noopener noreferrer">
            View Accessibility Information
        </a> */}



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
    tmacLogo: file(relativePath: { eq: "tmac_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orLogo: file(relativePath: { eq: "orGalleryLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`
