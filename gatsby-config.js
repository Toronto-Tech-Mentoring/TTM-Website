/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Josefin Sans:300,400,500,600,700,800,900',
          'Poppins:300,400,500,600,700,800,900',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif'],
        },
      },
    },
    'gatsby-plugin-svgr',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'jpg'],
          placeholder: 'dominantColor',
          quality: 100,
          backgroundColor: 'transparent',
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'nonsvgs',
        path: `${__dirname}/src/images/nonsvgs`,
      },
    },
  ],
};
