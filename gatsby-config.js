module.exports = {
  siteMetadata: {
    title: `Bodies, Borders, Fields`,
    author: `Trinity Square Video`,
    description: `Convened by Denise Ryner in collaboration with Yaniya Lee, Bodies Borders Fields is a free public symposium that re-imagines a 1967 conversation about blackness to generate a larger discourse for the contemporary moment around blackness and fugitivity as represented in critical art practices today. Bodies Borders Fields is a collaborative presentation of Trinity Square Video and Or Gallery with support from the Consulate General of France in Vancouver, OCADU, the Toronto Media Arts Centre and the Canada Council for the Arts Sector Innovation Grant. The symposium is co-convened by Denise Ryner and Yaniya Lee with organizational support by Emily Fitzpatrick and Karina Iskandarsjah. Design by Sameer Farooq. A “simultaneous conversation” took place on August 16, 1967 between seven speakers in Toronto and New York with the cooperation of Bell Telephone Company, the CBC and artscanada magazine (formerly Canadian Art). This cross-border conversation was recorded and published in that year’s October issue of artscanada which was dedicated to ‘black’ as a concept, painterly medium, symbol as well as socio-political category, expression and status.`,
    keywords: `bodies borders fields, bodies borders fields symposium, trinity square video, toronto media arts centre, or gallery, canada council for the arts, arts sector innovation grant`,
    siteUrl: `http://www.bodiesbordersfields.com/`,
    image: "/img/openGraph.jpg", // Path to your image you placed in the 'static' folder
    social: {
      twitter: `TSVToronto`,
    },

  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/markdown`,
        name: `markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bodies, Borders, Fields`,
        short_name: `BodiesBordersFields`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#008f4e`,
        display: `minimal-ui`,
        icon: `content/assets/bodiesBordersFields-favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
