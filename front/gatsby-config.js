require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  trailingSlash: 'never',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-strapi-graphql',
      options: {
        apiURL: process.env.API_URL,
        collectionTypes: ['ekintza', 'erakundea', 'zikloa'],
        singleTypes: [
          'hasiera',
          'bizi',
          'kafetegia',
          'lege-oharra',
          'pribatutasun-politika',
        ],
        // Enable/disable cache.
        cache: false,
        token: process.env.STRAPI_GRAPHQL_TOKEN,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Lato',
              variants: ['400', '700'],
              fontDisplay: 'swap',
            },
          ],
        },
      },
    },
    'gatsby-plugin-sass',
  ],
};
