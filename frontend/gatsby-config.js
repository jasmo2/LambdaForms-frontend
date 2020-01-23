let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
require('ts-node').register({ files: true })
require('dotenv').config({
  path: `.env.${activeEnv}`
})

module.exports = {
  siteMetadata: {
    title: 'Lambda Forms'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // Add typescript stack into webpack
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/App.tsx`)
      }
    }
    // {
    //   resolve: "gatsby-source-prismic",
    //   options: {
    //     repositoryName: "NAME", // (required)
    //     accessToken: process.env.GATSBY_PRISMIC_API_KEY,
    //   }
    // }
  ]
}
