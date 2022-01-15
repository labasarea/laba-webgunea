import { graphql, PageProps, useStaticQuery } from 'gatsby';
import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { GlobalStyles } from '../ui/GlobalStyles';
import { font, media, size } from '../ui/theme';

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
      <GlobalStyles />

      <Gainburua>
        <div>LABA LOGOA</div>

        <Helbidea>
          <p>Gazteluko plaza 2</p>
          <p>Iruñea</p>
        </Helbidea>
      </Gainburua>

      <Container>
        <main>
          <Deskribapena>
            {strapiHasiera.data.attributes.deskribapena}
          </Deskribapena>

          <IzenburuWrapper>
            <Marra />
            <Izenburua>{strapiHasiera.data.attributes.izenburua}</Izenburua>
          </IzenburuWrapper>
        </main>
      </Container>
    </>
  );
};

const Helbidea = styled.div`
  border-right: 3px solid white;
  padding-right: ${rem(size.small)};
  ${font.small()};
`;

const Gainburua = styled.header`
  padding: ${rem(size.base)};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${rem(size.base)};

  ${media.tablet`
    padding: ${rem(size.large)};
  `};
`;

const Deskribapena = styled.p`
  margin-bottom: ${rem(size.xlarge)};

  text-align: justify;

  ${font.large()};
`;

const IzenburuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Marra = styled.hr`
  flex-grow: 1;
  border: none;
  box-shadow: inset 0px -3px 0px 0px white;
  margin-right: ${rem(size.tiny)};
`;

const Izenburua = styled.h1`
  text-transform: uppercase;
  text-align: right;
  vertical-align: bottom;

  ${font.gargantuan()};
`;

export default IndexPage;
