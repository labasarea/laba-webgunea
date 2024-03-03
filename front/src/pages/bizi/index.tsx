import React from 'react';

import { graphql, PageProps } from 'gatsby';

import { SEO } from '../../components/SEO';
import { BiziContent } from '../../domain/bizi/BiziContent';
import { EkintzaContent } from '../../domain/ekintza/EkintzaContent';
import { ZikloaContent } from '../../domain/zikloa/ZikloaContent';
import { Bizi } from '../../views/Bizi';

interface QueryData {
  strapiBizi: BiziContent;
  allStrapiEkintza: { nodes: EkintzaContent[] };
  allStrapiZikloa: { nodes: ZikloaContent[] };
}

const BiziPage: React.FC<PageProps<QueryData>> = ({ location, data }) => {
  const content = data.strapiBizi;
  const ekintzak = data.allStrapiEkintza.nodes;
  const zikloak = data.allStrapiZikloa.nodes;

  return (
    <>
      <SEO title={content.izenburua} location={location} />

      <Bizi content={content} ekintzak={ekintzak} zikloak={zikloak} />
    </>
  );
};

export const query = graphql`
  {
    strapiBizi {
      deskribapena
      izenburua
    }
    allStrapiEkintza(sort: { hitzordua: ASC }) {
      nodes {
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
    allStrapiZikloa {
      nodes {
        slug
        izena
      }
    }
  }
`;

export default BiziPage;
