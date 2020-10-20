/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Josefin Sans`,
            variants: [`300`, `400`, `500`, `600`, `700`, `800`, `900`],
          },
          {
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `600`, `700`, `800`, `900`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /(skyline|timeline|bottom-line|partner-organization|vital-role|cheetohs)/,
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
  ],
}
