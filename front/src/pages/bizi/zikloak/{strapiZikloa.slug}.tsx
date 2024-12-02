import React from 'react';

import { graphql, PageProps } from 'gatsby';

import { SEO } from '../../../components/SEO';
import { ZikloaContent } from '../../../domain/zikloa/ZikloaContent';
import { NotFound } from '../../../views/NotFound';
import { Zikloa } from '../../../views/Zikloa/Zikloa';

interface QueryData {
  strapiZikloa: ZikloaContent;
}

const ZikloaPage: React.FC<PageProps<QueryData>> = ({ location, data }) => {
  const content = data.strapiZikloa;

  // TODO testeatu eta produkzioan jarri
  if (process.env.NODE_ENV === 'production') {
    return <NotFound />;
  }

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
