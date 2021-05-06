/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config();
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin Sans\:300,400,500,600,700,800,900`,
          `Poppins\:300,400,500,600,700,800,900`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /(about-us|skyline|timeline|bottom-line|vital-role|cheetohs|thankyou|who-we-are|how-it-works)/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/nonsvgs`,
      },
    },
      {
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "ttm-website",
      protocol: "https",
      hostname: "torontotechmentoring.ca",
    },
  },
  ],
}
