import React from 'react';

import { graphql, PageProps, useStaticQuery } from 'gatsby';

import { SEO } from '../components/SEO';
import { Hasiera } from '../views/Hasiera/Hasiera';
import { HasieraContent } from '../views/Hasiera/HasieraContent';

interface DataProps {
  strapiHasiera: HasieraContent;
}

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const { strapiHasiera } = useStaticQuery<DataProps>(graphql`
    {
      strapiHasiera {
        deskribapena
        izenburua
        edukia
      }
    }
  `);

  return (
    <>
      <SEO
        title={strapiHasiera.izenburua}
        description={strapiHasiera.deskribapena}
        location={location}
      />

      <Hasiera content={strapiHasiera} />
    </>
  );
};

export default IndexPage;
