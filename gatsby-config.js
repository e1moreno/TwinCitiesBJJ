require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Twin Cities BJJ',
        short_name: 'T.C. BJJ',
        start_url: '/',
        background_color: '#28519F',
        theme_color: '#28519F',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(
          './src/app/Layout/containers/LayoutContainer',
        ),
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
        host: 'preview.contentful.com',
      },
    },
  ],
};
