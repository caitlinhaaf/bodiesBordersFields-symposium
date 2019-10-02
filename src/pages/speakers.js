import React from "react"
import { graphql } from "gatsby"

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
        <table>
            <tr>
                <td>
                    <h4>Christina Battle</h4>
                    <p>Tktktktkt. Tktktktktk Tktktktktk Tktktktktk Tktktktktk Tktktktktk  TktktktktkTktktktktk  Tktktktktk Tktktktktk Tktktktktk Tktktktktk  Tktktktktk</p>
                </td>
            </tr>
            <tr>
                <td>
                    <h4>Raymond Boisjoly</h4>
                    <p>Tktktktkt. Tktktktktk Tktktktktk Tktktktktk Tktktktktk Tktktktktk  TktktktktkTktktktktk  Tktktktktk Tktktktktk Tktktktktk Tktktktktk  Tktktktktk</p>
                </td>
            </tr>
        </table>
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
  }
`
