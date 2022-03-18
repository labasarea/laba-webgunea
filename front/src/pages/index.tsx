import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React from 'react';
import { GlobalStyles } from '../ui/GlobalStyles';

import { Helmet } from 'react-helmet';
import { Gainburua } from '../components/Gainburua';

interface DataProps {
  strapiHasiera: {
    data: {
      attributes: {
        deskribapena: string;
        izenburua: string;
      };
    };
  };
}

const IndexPage: React.VFC<PageProps> = () => {
  const { strapiHasiera } = useStaticQuery<DataProps>(graphql`
    {
      strapiHasiera {
        data {
          attributes {
            deskribapena
            izenburua
          }
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        title={`${strapiHasiera.data.attributes.izenburua} | Laba`}
        htmlAttributes={{ lang: 'eu' }}
      >
        <meta
          name="description"
          content={strapiHasiera.data.attributes.deskribapena}
        />
      </Helmet>

      <GlobalStyles />

      <Gainburua
        atala="hasiera"
        izenburua={strapiHasiera.data.attributes.izenburua}
        deskribapena={strapiHasiera.data.attributes.deskribapena}
      />
    </>
  );
};

export default IndexPage;
