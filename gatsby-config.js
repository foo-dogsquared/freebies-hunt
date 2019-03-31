const config = require("./src/config");

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-plugin-react-svg`,
        options: {
            rule: {
                include: /images/
            }
        }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.title,
        start_url: `/`,
        background_color: config.mainColor,
        theme_color: config.mainColor,
        display: `standalone`,
        icon: `src/images/freebies-hunt-logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ` UA-126718538-4`,
        head: true,
        anonymize: true,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
