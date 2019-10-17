import React from "react"
import { graphql } from "gatsby"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import componentStyles from "./schedule.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventTable from "../components/eventTable"

class ScheduleTestPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const currentSchedule = data.allMarkdownRemark.edges[0].node
    // console.log(currentSchedule)
    // color classes: pink, blue, green

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Schedule" pathname="/schedule"/>
        <h1 style={{marginBottom: `0`}}>Schedule</h1>
        <h2 style={{marginBottom: `1rem`}} className="alt">{currentSchedule.frontmatter.eventTitle}</h2>

        <div className={componentStyles.tabs}>
            <Tabs>

                <TabList>
                    {
                        currentSchedule.frontmatter.days.map((day, i) => {
                            let colorClass;
                            if(i % 3 === 0) colorClass = "green"
                            else if(i % 2 === 0) colorClass = "blue"
                            else colorClass = "pink"

                            return(
                                <Tab key={i}>
                                    <span className={colorClass}>{day.dayWeek}</span>
                                </Tab>
                            ) 
                        })
                    }
                </TabList>

                {
                    currentSchedule.frontmatter.days.map((day, i) => {
                        let colorClass
                        let hdrClass = "null";
                        if(i % 3 === 0) colorClass = "green"
                        else if(i % 2 === 0) {
                            colorClass = "blue" 
                            hdrClass="alt"
                        }
                        else colorClass = "pink"
                        return(
                            <TabPanel key={i}>
                                <EventTable 
                                    eventItems={day.scheduleItems} 
                                    colorClass={colorClass}
                                    hdrClass={hdrClass}/>
                            </TabPanel>
                        ) 
                    })
                }

            </Tabs>
        </div>

      </Layout>
    )
  }
}

export default ScheduleTestPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        filter: {frontmatter: {tagType: {eq: "eventSchedule"}}},
        sort: { fields: [frontmatter___eventStartDate], 
        order: ASC
      }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            eventTitle
            days{
                dayWeek
                scheduleItems{
                    itemName
                    location
                    startTime
                    endTime
                    moderator
                    speakers
                    description
                }
            }
          }
        }
      }
    }
  }
`
