import React from 'react';

import { PageProps } from 'gatsby';

import { SEO } from '../components/SEO';
import { useKafetegiaContent } from '../domain/kafetegia/hooks/useKafetegiaContent';
import { Kafetegia } from '../views/Kafetegia';

const KafetegiaPage: React.FC<PageProps> = ({ location }) => {
  const content = useKafetegiaContent();

  return (
    <>
      <SEO
        title={content.izenburua}
        description={content.deskribapena}
        location={location}
      />

      <Kafetegia content={content} />
    </>
  );
};

export default KafetegiaPage;
