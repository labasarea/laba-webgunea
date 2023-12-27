import React from 'react';

import { graphql, PageProps, useStaticQuery } from 'gatsby';

import { SEO } from '../components/SEO';
import { RegularPage } from '../views/RegularPage/RegularPage';
import { DataProps } from './pribatutasun-politika';

export const PribatutasunPolitika: React.FC<PageProps> = ({ location }) => {
  const { strapiPribatutasunPolitika } = useStaticQuery<DataProps>(graphql`
    {
      strapiPribatutasunPolitika {
        izenburua
        edukia
      }
    }
  `);

  return (
    <>
      <SEO title={strapiPribatutasunPolitika.izenburua} location={location} />

      <RegularPage content={strapiPribatutasunPolitika} />
    </>
  );
};