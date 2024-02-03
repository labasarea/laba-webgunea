import { graphql, useStaticQuery } from 'gatsby';

import { BiziContent } from '../BiziContent';

interface DataProps {
  strapiBizi: BiziContent;
}

export function useBiziContent(): BiziContent {
  const { strapiBizi } = useStaticQuery<DataProps>(graphql`
    {
      strapiBizi {
        deskribapena
        izenburua
      }
    }
  `);

  return strapiBizi;
}
