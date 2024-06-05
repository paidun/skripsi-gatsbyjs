/**
 * @type {import('gatsby').GatsbyConfig}
 */


module.exports = {
  siteMetadata: {
    title: `gatsby_skripsi`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-transformer-remark",
    {
      resolve: 'gatsby-source-filesystem',
      // options: {
      //   "name": "images",
      //   "path": "./src/images/",
      // },
      // __key: "images"
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `templates`,
        path: `${__dirname}/src/templates/`,
      }


    }],
  // proxy: {
  //   prefix: "GATSBY",
  //   url: process.env.BASE_URL || "https://api.metavoid.my.id/api"
  // }

};

