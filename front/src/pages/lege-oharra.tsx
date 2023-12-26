import React from 'react';

import { graphql, PageProps, useStaticQuery } from 'gatsby';

import { SEO } from '../components/SEO';
import { RegularPage } from '../views/RegularPage';
import { RegularPageContent } from '../views/RegularPage/RegularPageContent';

interface DataProps {
  strapiLegeOharra: RegularPageContent;
}

const LegeOharra: React.FC<PageProps> = ({ location }) => {
  const { strapiLegeOharra } = useStaticQuery<DataProps>(graphql`
    {
      strapiLegeOharra {
        izenburua
        edukia
      }
    }
  `);

  return (
    <>
      <SEO title={strapiLegeOharra.izenburua} location={location} />

      <RegularPage content={strapiLegeOharra} />
    </>
  );
};

export default LegeOharra;
