import React from 'react';

import { PageProps } from 'gatsby';

import { SEO } from '../../../components/SEO';
import { useZikloaContent } from '../../../domain/zikloa/hooks/useZikloaContent';
import { Zikloa } from '../../../views/Zikloa/Zikloa';

const ZikloaPage: React.FC<PageProps> = ({ location }) => {
  const content = useZikloaContent();

  return (
    <>
      <SEO title={content.izena} location={location} />

      <Zikloa content={content} />
    </>
  );
};

export default ZikloaPage;
