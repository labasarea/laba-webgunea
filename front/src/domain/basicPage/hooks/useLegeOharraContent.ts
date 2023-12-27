import { graphql, useStaticQuery } from 'gatsby';

import { RegularPageContent } from '../RegularPageContent';

interface DataProps {
  strapiLegeOharra: RegularPageContent;
}

export function useLegeOharraContent(): RegularPageContent {
  const { strapiLegeOharra } = useStaticQuery<DataProps>(graphql`
    {
      strapiLegeOharra {
        izenburua
        edukia
      }
    }
  `);

  return strapiLegeOharra;
}
