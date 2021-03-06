/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const pageUrl = `${site.siteMetadata.siteUrl}${pathname || '/'}`
  const ogImageUrl = `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={metaDescription} />
            <meta name="image" content={ogImageUrl} />
            <meta name="keywords" content={site.siteMetadata.keywords} />
            <link rel="canonical" href={pageUrl} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={pageUrl} />
            {/* {isBlogPost ? <meta property="og:type" content="article" /> : null} */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={ogImageUrl} />
            {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}


            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            {/* <meta name="twitter:creator" content={seo.social.twitter} /> */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImageUrl} />

    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
