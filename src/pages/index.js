import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LogosRow from "../components/logosRow"
import Logotype from "../components/logotype"

class Homepage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {/* <h1>BODIES, BORDERS, FIELDS</h1> */}
        <Logotype />

        <h2 className="alt" style={{"text-align": "center"}}>
          22 - 24 November, 2019
        </h2>
        
        <h2>Presented By</h2>
        <LogosRow />
      </Layout>
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
  }
`
