import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import componentStyles from "./logosRow.module.scss"

const LogosRow = () => {
  const data = useStaticQuery(graphql`
    query {
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
      tsvLogo: file(relativePath: { eq: "Trinity-Square-Video-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cacLogo: file(relativePath: { eq: "canadaArtsCouncilLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={componentStyles.row}>
          <Img fluid={data.cacLogo.childImageSharp.fluid} objectFit="cover" alt="Canada Council for the Arts logo."/>

          <Img fluid={data.tsvLogo.childImageSharp.fluid} objectFit="cover" alt="Trinity Square Video logo."/>

          <Img fluid={data.tmacLogo.childImageSharp.fluid} objectFit="cover" alt="Toronto Media Arts Centre logo."/>

          <Img fluid={data.orLogo.childImageSharp.fluid} objectFit="cover" alt="Or Gallery logo." style={{maxWidth: `8rem`}}/>
    </div>
  )
}

export default LogosRow
