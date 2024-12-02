import React from 'react';

import { graphql, PageProps } from 'gatsby';

import { SEO } from '../../../components/SEO';
import { EkintzaContent } from '../../../domain/ekintza/EkintzaContent';
import { Ekintza } from '../../../views/Ekintza/Ekintza';
import { NotFound } from '../../../views/NotFound';

interface QueryData {
  strapiEkintza: EkintzaContent;
}

const EkintzaPage: React.FC<PageProps<QueryData>> = ({ location, data }) => {
  const content = data.strapiEkintza;

  // TODO testeatu eta produkzioan jarri
  if (process.env.NODE_ENV === 'production') {
    return <NotFound />;
  }

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
    zikloa {
      slug
      izena
    }
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
