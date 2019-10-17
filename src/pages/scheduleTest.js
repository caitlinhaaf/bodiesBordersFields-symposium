// import React from "react"
// import { graphql } from "gatsby"

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import "react-tabs/style/react-tabs.css";
// import componentStyles from "./schedule.module.scss"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// class ScheduleTestPage extends React.Component {
//   render() {
//     const { data } = this.props
//     const siteTitle = data.site.siteMetadata.title
//     const currentSchedule = data.allMarkdownRemark.edges[0].node

//     console.log(currentSchedule)

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO title="Schedule" pathname="/schedule"/>
//         <h1 style={{marginBottom: `0`}}>Schedule</h1>
//         <h2 style={{marginBottom: `1rem`}} className="alt">22 - 24 November, 2019</h2>

//         <div className={componentStyles.tabs}>
//             <Tabs>

//                 <TabList>
//                     {
//                         currentSchedule.frontmatter.days.map((day, i) => {
//                             return(
//                                 <Tab>
//                                     <span>{day.dayWeek}</span>
//                                 </Tab>
//                             ) 
//                         })
//                     }
//                 </TabList>
            
//                 {/* {
//                     currentSchedule.frontmatter.days.map((day, i) => {
//                         return(
//                             <TabPanel>
//                                 <table>
//                                     <tbody>
//                                         {
//                                             day.scheduleItems.map((item, j) => (
//                                                 <tr></tr>
//                                             ))
//                                         }
//                                     </tbody>
//                                 </table>
//                             <TabPanel>
//                         ) 
//                     })
//                 } */}

//             </Tabs>
//         </div>

//       </Layout>
//     )
//   }
// }

// export default ScheduleTestPage

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//         filter: {frontmatter: {tagType: {eq: "eventSchedule"}}},
//         sort: { fields: [frontmatter___eventStartDate], 
//         order: ASC
//       }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             eventTitle
//             days{
//                 dayWeek
//                 scheduleItem{
//                     itemName
//                 }
//             }
//           }
//         }
//       }
//     }
//   }
// `
