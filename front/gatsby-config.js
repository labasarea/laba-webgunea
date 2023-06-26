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
        apiURL: 'http://localhost:1337',
        collectionTypes: [],
        singleTypes: [
          'hasiera',
          'kafetegia',
          'lege-oharra',
          'pribatutasun-politika',
        ],
        contentTypes: [],
        // Enable/disable cache.
        cache: false,
        token:
          '307442ef6911b9692d6946bf6aac5d910795b56d92063e8a58ace14e31c8ac6ad7b64480ba591689abbad02758da9562e423e1ef1af8b9f303612ffb63f94f567060ea9f690d9d14bce676bdcf985a2a8c95643963ffd6f593490bb4b4ccae51572cbf315e7c823d0f368de2fe113b113986e9943df1a81e6e4228b82cc7cead',
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
              variants: ['300', '800'],
            },
          ],
        },
      },
    },
  ],
};
