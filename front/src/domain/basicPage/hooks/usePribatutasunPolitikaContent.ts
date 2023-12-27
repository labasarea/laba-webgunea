import { graphql, useStaticQuery } from 'gatsby';

import { RegularPageContent } from '../RegularPageContent';

interface DataProps {
  strapiPribatutasunPolitika: RegularPageContent;
}

export function usePribatutasunPolitikaContent(): RegularPageContent {
  const { strapiPribatutasunPolitika } = useStaticQuery<DataProps>(graphql`
    {
      strapiPribatutasunPolitika {
        izenburua
        edukia
      }
    }
  `);

  return strapiPribatutasunPolitika;
}
