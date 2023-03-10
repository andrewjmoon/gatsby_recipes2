/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const fetch = require(`isomorphic-fetch`)
const { createHttpLink } = require(`@apollo/client`)

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `hasura`,
        fieldName: `users`,
        createLink: () => {
          return createHttpLink({
            uri: "https://meet-whippet-78.hasura.app/v1/graphql",
            // uri: "https://hasura-heroku-based.herokuapp.com/v1/graphql",
            headers: {
              'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`,
            },
            fetch,
          })
        },
      }
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://meet-whippet-78.hasura.app/v1/graphql'
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@pages": "src/pages/user",
          "@sass": "src/sass",
          "@templates": "src/templates",
          "@posts": "content/posts",
        },
        extensions: [
          "js",
        ],
      }
    }
    //`gatsby-transformer-sharp`,
   // `gatsby-plugin-sharp`,
    /*
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    */
  ],
}

//NODE_OPTIONS=-openssl-legacy-provider