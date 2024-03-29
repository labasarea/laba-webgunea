import React from 'react';
import { Helmet } from 'react-helmet';

import { PageProps } from 'gatsby';

interface Props {
  title: string;
  description?: string;

  location: PageProps['location'];
}

export const SEO: React.FC<Props> = ({ title, description, location }) => (
  <Helmet title={`${title} | Laba`} htmlAttributes={{ lang: 'eu' }}>
    {description && <meta name="description" content={description} />}

    <meta
      name="og:image"
      content={`${location.protocol}//${location.host}/og-image.jpeg`}
    />
    <meta name="og:image:height" content="669" />
    <meta name="og:image:width" content="1205" />
  </Helmet>
);
