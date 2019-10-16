module.exports = {
  siteMetadata: {
    title: `Bodies, Borders, Fields`,
    author: `Trinity Square Video`,
    description: `Convened by Denise Ryner in collaboration with Yaniya Lee, Bodies Borders Fields is a free public symposium that re-imagines a 1967 conversation about blackness to generate a larger discourse for the contemporary moment around blackness and fugitivity as represented in critical art practices today.`,
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
