import { graphql, useStaticQuery } from 'gatsby';

import { ZikloaContent } from '../ZikloaContent';

interface DataProps {
  allStrapiZikloa: { nodes: ZikloaContent[] };
}

export function useAllZikloaContent(): ZikloaContent[] {
  const {
    allStrapiZikloa: { nodes },
  } = useStaticQuery<DataProps>(graphql`
    query {
      allStrapiZikloa {
        nodes {
          slug
          izena
        }
      }
    }
  `);

  return nodes;
}
