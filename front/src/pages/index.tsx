import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React from 'react';

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

const IndexPage: React.VFC<PageProps<DataProps>> = () => {
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
    <main>
      <h1>{strapiHasiera.data.attributes.izenburua}</h1>
      <p>{strapiHasiera.data.attributes.deskribapena}</p>
    </main>
  );
};

export default IndexPage;
