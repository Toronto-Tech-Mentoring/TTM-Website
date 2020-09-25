/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom:{
          families: ['Josefin Sans, Poppins'],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
  ],
}
