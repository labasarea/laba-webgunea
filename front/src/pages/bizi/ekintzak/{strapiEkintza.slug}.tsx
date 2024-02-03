import React from 'react';

import { PageProps } from 'gatsby';

import { SEO } from '../../../components/SEO';
import { useEkintzaContent } from '../../../domain/ekintza/hooks/useEkintzaContent';
import { Ekintza } from '../../../views/Ekintza/Ekintza';

const EkintzaPage: React.FC<PageProps> = ({ location }) => {
  const content = useEkintzaContent();

  return (
    <>
      <SEO title={content.izenburua} location={location} />

      <Ekintza content={content} />
    </>
  );
};

export default EkintzaPage;
