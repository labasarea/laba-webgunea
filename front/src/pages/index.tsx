import React from 'react';

import { PageProps } from 'gatsby';

import { SEO } from '../components/SEO';
import { useHasieraContent } from '../viewQueries/useHasieraContent';
import { Hasiera } from '../views/Hasiera/Hasiera';

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const content = useHasieraContent();

  return (
    <>
      <SEO
        title={content.izenburua}
        description={content.deskribapena}
        location={location}
      />

      <Hasiera content={content} />
    </>
  );
};

export default IndexPage;
