import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import componentStyles from "./logosRow.module.scss"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
    }
  `)

  return (
    <div className={componentStyles.row}>
        <div>
          <Img fluid={data.tmacLogo.childImageSharp.fluid} objectFit="cover" alt="Toronto Media Arts Centre logo."/>
        </div>
        <div>
          <Img fluid={data.orLogo.childImageSharp.fluid} objectFit="cover" alt="Or Gallery logo."/>
        </div>
    </div>
    
  )
}

export default LogosRow
