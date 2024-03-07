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
  fragment Zikloa on StrapiZikloa {
    slug
    izena
    deskribapena
    ekintzak {
      ...Ekintza
    }
  }

  query ($slug: String) {
    strapiZikloa(slug: { eq: $slug }) {
      ...Zikloa
    }
  }
`;

export default ZikloaPage;
