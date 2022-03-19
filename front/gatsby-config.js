require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const qs = require('qs');
const query = qs.stringify(
  {
    populate: {
      edariBeroak: {
        populate: ['alergenoak'],
      },
      infusioEkologikoak: {
        populate: ['alergenoak'],
      },
      edariHotzak: {
        populate: ['alergenoak'],
      },
      pikatzekoak: {
        populate: ['alergenoak'],
      },
      gozoak: {
        populate: ['alergenoak'],
      },
      anizkoJogurta: {
        populate: ['alergenoak'],
      },
      tostadak: {
        populate: ['alergenoak'],
      },
    },
  },
  {
    encodeValuesOnly: true,
  },
);

const apiUrl = process.env.API_URL || 'http://localhost:1337/api';

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
      resolve: 'gatsby-source-custom-api',
      options: {
        rootKey: 'kafetegia',
        url: `${apiUrl}/kafetegia?${query}`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: apiUrl,
        singleTypes: [
          'hasiera',
          {
            name: 'kafetegia',
            queryParams: {
              populate: '*',
            },
          },
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Laba webgunea',
        short_name: 'Laba',
        start_url: '/',
        background_color: `#fd3447`,
        theme_color: `#fd3447`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    'gatsby-plugin-offline',
    // 'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`almarai\:800`, `almarai\:300`],
        display: 'swap',
      },
    },
  ],
};
