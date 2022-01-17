import { graphql, PageProps, useStaticQuery } from 'gatsby';
import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { GlobalStyles } from '../ui/GlobalStyles';
import { font, media, size } from '../ui/theme';
import LabaLogo from '../assets/logo.svg';
import InstagramLogo from '../assets/instagram.svg';
import TwitterLogo from '../assets/twitter.svg';

import { Helmet } from 'react-helmet';

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
      <Helmet title="Laba gara | Laba" htmlAttributes={{ lang: 'eu' }}>
        <meta
          name="description"
          content={strapiHasiera.data.attributes.deskribapena}
        />
      </Helmet>

      <GlobalStyles />

      <Gainburua>
        <LogoWrapper>
          <Logo title="Laba logoa" />
        </LogoWrapper>

        <Kontaktua>
          <Helbidea>
            <p>Gazteluko plaza 2</p>
            <p>Iruñea</p>
          </Helbidea>

          <SareSozialak>
            <SareSoziala>
              <a href="https://twitter.com/labasarea/">
                <Twitter />
              </a>
            </SareSoziala>

            <SareSoziala>
              <a href="https://www.instagram.com/labasarea/">
                <Instagram />
              </a>
            </SareSoziala>
          </SareSozialak>
        </Kontaktua>
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
  width: ${rem(size.large)};

  ${media.tablet`
    width: ${rem(size.huge)};
  `}
`;

const Kontaktua = styled.div`
  display: flex;
`;

const SareSoziala = styled.li`
  width: ${rem(size.base)};
  height: ${rem(size.base)};
  :not(:last-child) {
    margin-right: ${rem(size.small)};
  }
`;

const Instagram = styled(InstagramLogo)`
  width: ${rem(size.base)};
  height: ${rem(size.base)};
  path {
    fill: white;
  }
`;

const Twitter = styled(TwitterLogo)`
  width: ${rem(size.base)};
  height: ${rem(size.base)};
  path {
    fill: white;
  }
`;

const Logo = styled(LabaLogo)`
  path {
    fill: white;
  }
`;

const SareSozialak = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

const Helbidea = styled.address`
  border-right: 3px solid white;
  padding-right: ${rem(size.small)};
  margin-right: ${rem(size.small)};
  ${font.tiny()};
`;

const Gainburua = styled.header`
  padding: ${rem(size.tiny)};
  display: flex;
  align-items: start;
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
