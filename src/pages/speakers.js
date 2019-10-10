import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class SpeakersPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <h1>SPEAKERS</h1>

        <div className="twoCol">

          <div>
            <div style={{"max-width":"200px", "margin-bottom": "1rem"}}>
              <Img fluid={data.headshot.childImageSharp.fluid} objectFit="cover" alt="Headshot placeholder."/>
            </div>
            <h4>Christina Battle</h4>
            <p>Tktktktkt. Tktktktktk Tktktktktk Tktktktktk Tktktktktk Tktktktktk  TktktktktkTktktktktk  Tktktktktk Tktktktktk Tktktktktk Tktktktktk  Tktktktktk</p>
          </div>

          <div>
            <div style={{"max-width":"200px", "margin-bottom": "1rem"}}>
              <Img fluid={data.headshot.childImageSharp.fluid} objectFit="cover" alt="Headshot placeholder."/>
            </div>
            <h4>Raymond Boisjoly</h4>
            <p>Tktktktkt. Tktktktktk Tktktktktk Tktktktktk Tktktktktk Tktktktktk  TktktktktkTktktktktk  Tktktktktk Tktktktktk Tktktktktk Tktktktktk  Tktktktktk</p>
          </div>

        </div>


      </Layout>
    )
  }
}

export default SpeakersPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    headshot: file(relativePath: { eq: "headshotPlaceholder.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
