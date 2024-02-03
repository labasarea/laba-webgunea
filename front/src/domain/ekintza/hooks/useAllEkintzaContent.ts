import { graphql, useStaticQuery } from 'gatsby';

import { EkintzaContent } from '../EkintzaContent';

interface DataProps {
  allStrapiEkintza: { nodes: EkintzaContent[] };
}

export function useAllEkintzaContent(): EkintzaContent[] {
  const {
    allStrapiEkintza: { nodes },
  } = useStaticQuery<DataProps>(graphql`
    query {
      allStrapiEkintza {
        nodes {
          slug
          izenburua
          hitzordua
        }
      }
    }
  `);

  return nodes;
}
