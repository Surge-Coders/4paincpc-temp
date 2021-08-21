/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Startup",
    titleTemplate: "%s | Personalized Pain Management",
    description: "Clinical Pain Consultants, S.C. temporary web site until custom site is designed.",
    siteUrl: "https://www.4paincpc.com",
    author: "SURGE CODERS",
    authorSite: "https://www.surgecoders.dev",
    image: "/yellow-metal-design-decoration.jpg",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
