import React from 'react';

import { PageProps } from 'gatsby';

import { SEO } from '../components/SEO';
import { usePribatutasunPolitikaContent } from '../viewQueries/usePribatutasunPolitikaContent';
import { RegularPage } from '../views/RegularPage/RegularPage';

const PribatutasunPolitika: React.FC<PageProps> = ({ location }) => {
  const content = usePribatutasunPolitikaContent();

  return (
    <>
      <SEO title={content.izenburua} location={location} />

      <RegularPage content={content} />
    </>
  );
};

export default PribatutasunPolitika;
