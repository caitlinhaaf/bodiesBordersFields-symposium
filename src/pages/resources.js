import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ResourcesPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Resources" pathname="/resources"/>
        <h1>Resources</h1>
        
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <div className="twoCol">

                <div>
                  <img 
                    src={node.frontmatter.featureImg} 
                    alt={node.frontmatter.featureImgAlt ? node.frontmatter.featureImgAlt : 'blog post feature image'}/>
                </div>
                
                <div>
                  <header style={{marginBottom: `1rem`}}>
                  <h3
                    className="alt"
                    style={{
                      marginBottom: `.5rem`,
                    }}
                  >
                    <Link style={{ 
                      fontSize: `1.75rem`, 
                      boxShadow: `none`,
                      }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.excerpt,
                    }}
                  />
                </section>
                </div>

              </div>
            </article>
            )
          })
        }

      </Layout>
    )
  }
}

export default ResourcesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        filter: {frontmatter: {tagType: {eq: "blogPost"}}},
        sort: { fields: [frontmatter___date], 
        order: DESC
      }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featureImg
            featureImgAlt
          }
        }
      }
    }
  }
`
