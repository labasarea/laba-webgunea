import { PageProps } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import ogImagePath from '../images/og-image.jpeg';

export const SEO: React.VFC<{
  title: string;
  description: string;
  location: PageProps['location'];
}> = ({ title, description, location }) => (
  <Helmet title={`${title} | Laba`} htmlAttributes={{ lang: 'eu' }}>
    <meta name="description" content={description} />
    <meta
      name="og:image"
      content={`${location.protocol}//${location.host}${ogImagePath}`}
    />
    <meta name="og:image:height" content="500" />
    <meta name="og:image:width" content="1500" />
  </Helmet>
);
