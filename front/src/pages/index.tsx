import { graphql, PageProps, useStaticQuery } from 'gatsby';
import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { GlobalStyles } from '../ui/GlobalStyles';
import { font, media, size } from '../ui/theme';
import LabaLogo from '../assets/logo.svg';

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
        <LogoWrapper>
          <Logo title="Laba logoa" />
        </LogoWrapper>

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

const LogoWrapper = styled.div`
  width: ${rem(size.huge)};
`;

const Logo = styled(LabaLogo)`
  path {
    fill: white;
  }
`;

const Helbidea = styled.address`
  align-self: start;
  border-right: 3px solid white;
  padding-right: ${rem(size.small)};
  ${font.tiny()};
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

  ${font.base()};

  ${media.tablet`
    ${font.large()};
  `};
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
  text-align: right;
  vertical-align: bottom;

  &:after {
    content: '.';
  }

  ${font.gargantuan()};
`;

export default IndexPage;
