import { graphql, useStaticQuery } from 'gatsby';

import { HasieraContent } from '../HasieraContent';

interface DataProps {
  strapiHasiera: HasieraContent;
}

export function useHasieraContent(): HasieraContent {
  const { strapiHasiera } = useStaticQuery<DataProps>(graphql`
    {
      strapiHasiera {
        deskribapena
        izenburua
        edukia
      }
    }
  `);

  return strapiHasiera;
}
