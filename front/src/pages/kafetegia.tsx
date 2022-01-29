import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React from 'react';
import { GlobalStyles } from '../ui/GlobalStyles';

import { Helmet } from 'react-helmet';
import { Gainburua } from '../components/Gainburua';

interface DataProps {
  strapiKafetegia: {
    data: {
      attributes: {
        deskribapena: string;
        izenburua: string;
      };
    };
  };
}

const Kafetegia: React.VFC<PageProps> = () => {
  const { strapiKafetegia } = useStaticQuery<DataProps>(graphql`
    {
      strapiKafetegia {
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
        title={`${strapiKafetegia.data.attributes.izenburua} | Laba`}
        htmlAttributes={{ lang: 'eu' }}
      >
        <meta
          name="description"
          content={strapiKafetegia.data.attributes.deskribapena}
        />
      </Helmet>

      <GlobalStyles />

      <Gainburua
        atala="kafetegia"
        izenburua={strapiKafetegia.data.attributes.izenburua}
        deskribapena={strapiKafetegia.data.attributes.deskribapena}
      />
    </>
  );
};

export default Kafetegia;
