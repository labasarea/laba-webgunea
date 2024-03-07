import React from 'react';

import { graphql, PageProps } from 'gatsby';

import { SEO } from '../../../components/SEO';
import { EkintzaContent } from '../../../domain/ekintza/EkintzaContent';
import { Ekintza } from '../../../views/Ekintza/Ekintza';

interface QueryData {
  strapiEkintza: EkintzaContent;
}

const EkintzaPage: React.FC<PageProps<QueryData>> = ({ location, data }) => {
  const content = data.strapiEkintza;

  return (
    <>
      <SEO title={content.izenburua} location={location} />

      <Ekintza content={content} />
    </>
  );
};

export const query = graphql`
  fragment Ekintza on StrapiEkintza {
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

  query ($slug: String) {
    strapiEkintza(slug: { eq: $slug }) {
      ...Ekintza
    }
  }
`;

export default EkintzaPage;
