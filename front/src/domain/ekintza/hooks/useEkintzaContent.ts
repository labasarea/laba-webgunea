import { graphql, useStaticQuery } from 'gatsby';

import { EkintzaContent } from '../EkintzaContent';

interface DataProps {
  strapiEkintza: EkintzaContent;
}

export function useEkintzaContent(): EkintzaContent {
  const { strapiEkintza } = useStaticQuery<DataProps>(graphql`
    query ($slug: String) {
      strapiEkintza(slug: { eq: $slug }) {
        slug
        izenburua
      }
    }
  `);

  return strapiEkintza;
}
