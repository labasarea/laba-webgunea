import React from 'react';

import { PageProps } from 'gatsby';

import { SEO } from '../components/SEO';
import { useLegeOharraContent } from '../viewQueries/useLegeOharraContent';
import { RegularPage } from '../views/RegularPage';

const LegeOharra: React.FC<PageProps> = ({ location }) => {
  const content = useLegeOharraContent();

  return (
    <>
      <SEO title={content.izenburua} location={location} />

      <RegularPage content={content} />
    </>
  );
};

export default LegeOharra;
