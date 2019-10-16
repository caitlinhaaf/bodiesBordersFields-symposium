import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LogosRow from "../components/logosRow"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" pathname="/about"/>
        <article>
            <h1>About</h1>

            <p>
            Convened by  Denise Ryner in collaboration with Yaniya Lee, Bodies Borders Fields is a free public symposium that  re-imagines a 1967 conversation about blackness to generate a larger discourse for the contemporary moment around blackness and fugitivity as represented in critical art practices today.
            </p>

            <p style={{fontWeight: "bold", fontSize: "1.25rem"}}>
            CHRISTINA BATTLE / RAYMOND BOISJOLY / DEANNA BOWEN/RIZVANA BRADLEY / JOSHUA CHAMBERS-LETSON /KEYON GASKIN / CHE GOSSETT / STEFFANI JEMISON / AISHA SASHA JOHN / JESSICA LYNNE / CHARMAINE NELSON / M. NOURBESE PHILIP/ TINA POST / KRYS VERRALL / KANDIS WILLIAMS
            </p>

            <p>
            Bodies Borders Fields is a collaborative presentation of Trinity Square Video and Or Gallery with support from the Consulate General of France in Vancouver, OCADU, the Toronto Media Arts Centre and the Canada Council for the Arts Sector Innovation Grant. The symposium is co-convened by Denise Ryner and Yaniya Lee with organizational support by Emily Fitzpatrick and Karina Iskandarsjah. Design by Sameer Farooq.
            </p>

            <p>
            A "simultaneous conversation" took place on August 16, 1967 between seven speakers in Toronto and New York with the cooperation of Bell Telephone Company, the CBC and artscanada magazine (formerly Canadian Art). This cross-border conversation was recorded and published in that year's October issue of artscanada which was dedicated to 'black' as a concept, painterly medium, symbol as well as socio-political category, expression and status.
            </p>

            <p>
            Bodies Borders Fields, is a series of events that conversation. Responding to an absence of black experience in discussions between the 1967 panelists, an absence that has since been examined by writers Fred Moten, Krys Verrall and others, Bodies Borders Fields will dislocate the original panel discussion to contemporary contexts and representations of black and blackness in sound, performance and visual culture with respect to black social life and expression. 
            </p>

            <p>
            Participants have a stake in contemporary discourses and readings of black and blackness as a signifier as well as a lived-experience shared by generations of the black diaspora. Bodies Borders Fields supports ongoing and future discussions of blackness as an ever shifting, circulating and transforming factor for the survival and destabilization of colonial systems and institutions.
            </p>

            <p>
            All roundtables, talks and panels are free and open to the public. Registration required for workshops
            </p>
        </article>

        <h2>Presented By</h2>
            <LogosRow />
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
