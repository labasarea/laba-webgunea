import React from 'react';

import { PageProps } from 'gatsby';

import { SEO } from '../components/SEO';
import { NotFound } from '../views/NotFound';

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  return (
    <>
      <SEO title="Ez dugu orria topatu" location={location} />

      <NotFound />
    </>
  );
};

export default NotFoundPage;
