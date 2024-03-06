import React from 'react';

import { graphql, PageProps } from 'gatsby';

import { SEO } from '../../../components/SEO';
import { ZikloaContent } from '../../../domain/zikloa/ZikloaContent';
import { Zikloa } from '../../../views/Zikloa/Zikloa';

interface QueryData {
  strapiZikloa: ZikloaContent;
}

const ZikloaPage: React.FC<PageProps<QueryData>> = ({ location, data }) => {
  const content = data.strapiZikloa;

  return (
    <>
      <SEO title={content.izena} location={location} />

      <Zikloa content={content} />
    </>
  );
};

export const query = graphql`
  query ($slug: String) {
    strapiZikloa(slug: { eq: $slug }) {
      slug
      izena
      deskribapena
      ekintzak {
        slug
        izenburua
        titularra
        deskribapena
        hitzordua
        kartela {
          alternativeText
          formats
        }
      }
    }
  }
`;

export default ZikloaPage;
