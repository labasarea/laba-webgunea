import { graphql, useStaticQuery } from 'gatsby';

import { ZikloaContent } from '../ZikloaContent';

interface DataProps {
  strapiZikloa: ZikloaContent;
}

export function useZikloaContent(): ZikloaContent {
  const { strapiZikloa } = useStaticQuery<DataProps>(graphql`
    query ($slug: String) {
      strapiZikloa(slug: { eq: $slug }) {
        slug
        izena
      }
    }
  `);

  return strapiZikloa;
}
