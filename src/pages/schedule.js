import React from "react"
import { graphql } from "gatsby"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import componentStyles from "./schedule.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

class SchedulePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <h1>SCHEDULE</h1>

        <div className={componentStyles.tabs}>
            <Tabs>
                <TabList>
                    <Tab>
                        <span className="pink">Friday</span>
                    </Tab>
                    <Tab>
                        <span className="blue">Saturday</span>
                    </Tab>
                    <Tab>
                        <span className="green">Sunday</span>
                    </Tab>
                </TabList>
            
                <TabPanel>
                    <table>
                        <tr>
                            <td>6:00PM [location]</td>
                            <td className="pink">
                                <h4>Opening performance</h4>
                                <p>
                                A live performance by Keyon Gaskin followed by a short talk.
                                <br/><br/>
                                <span className={componentStyles.bold}>Speaker(s):</span> Keyon Gaskin
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>7:00PM [location]</td>
                            <td className="pink">
                                <h4 className="alt">In conversation, Border, Bodies, Fields: the Black Aesthetic Revisited</h4>
                                <p>
                                A conversation about the themes, ideas and histories that were the starting point for this symposium.
                                <br/><br/>
                                <span className={componentStyles.bold}>Speaker(s):</span> Krys Verall,  M NourbeSe Philip
                                <br/>
                                <span className={componentStyles.bold}>Moderator:</span> Denise Ryner
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>8:30PM [location]</td>
                            <td className="pink">
                                <h4>Opening Reception</h4>
                                <p>
                                Opening reception for public and participants. Refreshments and snacks served.
                                </p>
                            </td>
                        </tr>
                    </table>
                </TabPanel>

                <TabPanel>
                <table>
                        <tr>
                            <td>11:00 to 12:30 [location] (simultaneous)</td>
                            <td className="blue">
                                <h4>Workshop: Writing</h4>
                                <p>
                                A writing workshop for thinking and writing about black creative histories, feminst epistemologies and the arts. Sign up required.
                                <br/><br/>
                                <span className={componentStyles.bold}>Speaker(s):</span> Jessica Lynne
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>11:00 to 12:30 [location] (simultaneous)</td>
                            <td className="blue">
                                <h4 className="alt">Roundtable: Authenticity and the Replicability of Cultural Vernaculars</h4>
                                <p>
                                Three artists from different fields discuss the cultural forms created in times of urgency and how they move through time and space.
                                <br/><br/>
                                <span className={componentStyles.bold}>Speaker(s):</span> Raymond Boisjoly, Bear Witness, Lillian Allen
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"  className="blue">
                                <h4>Brunch</h4>
                            </td>
                        </tr>
                        <tr>
                            <td>2:00 to 3:30 [location] (simultaneous)</td>
                            <td  className="blue">
                                <h4 className="alt">Workshop: Aesthetics of Black Performance and Sound</h4>
                                <p>
                                A workshop about performance and sound. Sign up required.
                                <br/><br/>
                                <span className={componentStyles.bold}>Speaker(s):</span> Steffani Jemison
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>2:00 to 4:00 [location] (simultaneous)</td>
                            <td className="blue">
                                <h4>Roundtable: Black Beings as Public Beings/Officiated Beings/Hypervisible Beings</h4>
                                <p>
                                A conversation about blackness and visibility and living as visible and invisible in hypersurveilled society.
                                <br/><br/>
                                <span className={componentStyles.bold}>Speaker(s):</span> Che Gossett (virtually), Charmaine Nelson Joshua Chambers Letson
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>4:30PM to 6:00 [location]</td>
                            <td className="blue">
                                <h4 className="alt">Talk/Plenary</h4>
                                <p>
                                Open conversation that extends the topics and ideas discussed throughout the day.
                                </p>
                            </td>
                        </tr>
                    </table>
                </TabPanel>

                <TabPanel>
                <table>
                        <tr>
                            <td>11:00AM</td>
                            <td colspan="2"  className="green">
                                <h4>Brunch</h4>
                            </td>
                        </tr>
                        <tr>
                            <td>12:30 to 2:30 [location]</td>
                            <td className="green">
                                <h4 className="alt">Roundtable: Black Performance and Gesture</h4>
                                <p>
                                A panel and discussion from performance theorists and practitioners about blackness and performance and gesture.
                                <br/><br/>
                                <span className={componentStyles.bold}>Speaker(s):</span> Keyon Gaskin, Rizvana Bradley, Tina Post
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>2:30 to 4:00 [location] (simultaneous)</td>
                            <td className="green">
                                <h4>Workshop</h4>
                                <p>
                                A participatory workshop that uses the body, and interaction with others to centre and groundus in our bodies. Sign up required.
                                <br/><br/>
                                <span className={componentStyles.bold}>Speaker(s):</span> Aisha Sasha John
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>3:00 to 5:00 [location] (simultaneous)</td>
                            <td className="green">
                                <h4 className="alt">Roundtable: Black and Formal Aesthetics</h4>
                                <p>
                                A conversation about representation and artistic forms from ancient greece to contemporary cinema.
                                <br/><br/>
                                <span className={componentStyles.bold}>Speaker(s):</span> Kandis Williams, Deanna Bowen, Christina Battle 
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>5:00PM to 6:00 [location]</td>
                            <td className="green">
                                <h4>Plenary/Open Response</h4>
                                <p>
                                In closing a gathering to discuss responses and outcomes of the weekend's events, presentations and performances.
                                </p>
                            </td>
                        </tr>
                    </table>
                </TabPanel>

            </Tabs>
        </div>

      </Layout>
    )
  }
}

export default SchedulePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
