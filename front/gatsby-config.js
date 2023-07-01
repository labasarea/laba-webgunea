require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi-graphql',
      options: {
        apiURL: process.env.API_URL,
        collectionTypes: ['sf-ekitaldia'],
        singleTypes: [
          'hasiera',
          'kafetegia',
          'lege-oharra',
          'pribatutasun-politika',
          'laba-gara',
        ],
        contentTypes: [],
        // Enable/disable cache.
        cache: false,
        token: process.env.STRAPI_GRAPHQL_TOKEN,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Laba',
        short_name: 'Laba',
        start_url: '/',
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    'gatsby-plugin-offline',
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
              family: 'Almarai',
              variants: ['300', '700'],
            },
          ],
        },
      },
    },
  ],
};
