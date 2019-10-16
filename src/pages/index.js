import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import LandingLayout from "../components/landingLayout"
import SEO from "../components/seo"
// import Logotype from "../components/logotype"

class Homepage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    console.log(`testing...`)
    console.log(document.querySelectorAll('.logoFade'))

    return (
      <LandingLayout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />

        <div style={{
          width: `80%`, 
          maxWidth: `1000px`, 
          margin: `0 auto`,
          position: `relative`}}>
          <div className="logoFade">
            <Img fluid={data.bodiesImg.childImageSharp.fluid} objectFit="cover" alt="Bodies logotype."/>
          </div>
          <div className="logoFade">
            <Img fluid={data.bordersImg.childImageSharp.fluid} objectFit="cover" alt="Borders logotype."/>
          </div>
          <div className="logoFade">
            <Img fluid={data.fieldsImg.childImageSharp.fluid} objectFit="cover" alt="Fields logotype."/>
          </div>
          
        </div>


        <h2 className="alt" style={{textAlign: "center"}}>
          22 - 24 November, 2019
        </h2>

      </LandingLayout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    bodiesImg: file(relativePath: { eq: "bodies.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bordersImg: file(relativePath: { eq: "borders.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fieldsImg: file(relativePath: { eq: "fields.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
