import React from 'react';

import { PageProps } from 'gatsby';

import { SEO } from '../../components/SEO';
import { useBiziContent } from '../../domain/bizi/hooks/useBiziContent';
import { Bizi } from '../../views/Bizi';

const BiziPage: React.FC<PageProps> = ({ location }) => {
  const content = useBiziContent();

  return (
    <>
      <SEO title={content.izenburua} location={location} />

      <Bizi content={content} />
    </>
  );
};

export default BiziPage;
