import React from 'react';

import { PageProps } from 'gatsby';

import { SEO } from '../components/SEO';
import { GlobalStyles } from '../ui/GlobalStyles';
import { useKafetegiaData } from '../viewQueries/useKafetegiaData';
import { Kafetegia } from '../views/Kafetegia';

const KafetegiaPage: React.FC<PageProps> = ({ location }) => {
  const content = useKafetegiaData();

  return (
    <>
      <SEO
        title={content.izenburua}
        description={content.deskribapena}
        location={location}
      />

      <GlobalStyles />

      <Kafetegia content={content} />
    </>
  );
};

export default KafetegiaPage;
