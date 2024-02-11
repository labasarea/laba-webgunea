import React from 'react';

import { graphql, PageProps } from 'gatsby';

import { SEO } from '../../../components/SEO';
import { EkintzaContent } from '../../../domain/ekintza/EkintzaContent';
import { Ekintza } from '../../../views/Ekintza/Ekintza';

const EkintzaPage: React.FC<PageProps<{ strapiEkintza: EkintzaContent }>> = ({
  location,
  data,
}) => {
  const content = data.strapiEkintza;

  return (
    <>
      <SEO title={content.izenburua} location={location} />

      <Ekintza content={content} />
    </>
  );
};

export const query = graphql`
  query ($slug: String) {
    strapiEkintza(slug: { eq: $slug }) {
      slug
      izenburua
      kartela {
        alternativeText
        formats
      }
    }
  }
`;

export default EkintzaPage;
