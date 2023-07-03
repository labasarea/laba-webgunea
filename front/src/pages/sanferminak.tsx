import { graphql, navigate, PageProps, useStaticQuery } from 'gatsby';
import React from 'react';
import { GlobalStyles } from '../ui/GlobalStyles';

import { Helmet } from 'react-helmet';
import { Gainburua } from '../components/Gainburua';
import styled from 'styled-components';
import { colors, font, fontWeight, media, size } from '../ui/theme';
import { Container } from '../components/Container';
import { rem } from 'polished';
import ReactMarkdown from 'react-markdown';
import { Oina } from '../components/Oina';
import { SFEgunaEdukia } from '../components/SFEgunaEdukia';
import { datesUtils } from '../utils/dateUtils';
import ogImagePath from '../images/og-image.jpeg';

export interface SFEguna {
  id: string;
  eguna: string;
  ekitaldi_nagusia: {
    id: string;
    hitzordua: string;
    izenburua: string;
  };
}

interface DataProps {
  strapiSanferminak: {
    datu_orokorrak: {
      deskribapena: string;
      izenburua: string;
    };
    edukia?: string;
    sf_egunak?: SFEguna[];
  };
}

const IndexPage: React.VFC<PageProps> = ({ location }) => {
  const { strapiSanferminak } = useStaticQuery<DataProps>(graphql`
    {
      strapiSanferminak {
        datu_orokorrak {
          izenburua
          deskribapena
        }
        edukia
        sf_egunak {
          eguna
          id
          ekitaldi_nagusia {
            id
            hitzordua
            izenburua
          }
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        title={`${strapiSanferminak.datu_orokorrak.izenburua} | Laba`}
        htmlAttributes={{ lang: 'eu' }}
      >
        <meta
          name="description"
          content={strapiSanferminak.datu_orokorrak.deskribapena}
        />
        <meta
          name="og:image"
          content={`${location.protocol}//${location.host}${ogImagePath}`}
        />
        <meta name="og:image:height" content="500" />
        <meta name="og:image:width" content="1500" />
      </Helmet>

      <GlobalStyles />

      <Gainburua
        atala="sanferminak"
        izenburua={strapiSanferminak.datu_orokorrak.izenburua}
        deskribapena={strapiSanferminak.datu_orokorrak.deskribapena}
        onClick={() => {
          navigate('/sanferminak#edukia');
        }}
      />

      <ContentWrapper id="edukia">
        <Container>
          {strapiSanferminak.edukia && (
            <Deskribapena>{strapiSanferminak.edukia}</Deskribapena>
          )}

          {strapiSanferminak.sf_egunak &&
            strapiSanferminak.sf_egunak.length > 0 && (
              <SFEgunZerrenda>
                {strapiSanferminak.sf_egunak.map(sfeguna => (
                  <SFEgunaElementua
                    key={sfeguna.id}
                    className={
                      datesUtils.isToday(new Date(sfeguna.eguna))
                        ? 'active'
                        : ''
                    }
                  >
                    <SFEgunaEdukia sfeguna={sfeguna} />
                  </SFEgunaElementua>
                ))}
              </SFEgunZerrenda>
            )}
        </Container>
      </ContentWrapper>

      <Oina />
    </>
  );
};

const SFEgunaElementua = styled.li`
  padding: ${rem(size.small)};

  width: 100%;
  background-color: ${colors.beltza};
  color: ${colors.zuria};

  &.active {
    @keyframes mymove {
      0% {
        background-color: ${colors.beltza};
      }
      33% {
        background-color: ${colors.morea};
      }
      66% {
        background-color: ${colors.beltza};
      }
    }

    animation: mymove 4s infinite;
  }

  ${media.tablet`
    aspect-ratio: 1/1;
    margin-bottom: 0;
  `}
`;

const SFEgunZerrenda = styled.ul`
  display: grid;
  grid-column-gap: ${rem(size.mini)};
  grid-row-gap: ${rem(size.mini)};

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.desktop`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

const Deskribapena = styled(ReactMarkdown)`
  margin-bottom: ${rem(size.large)};

  p:not(-last-child) {
    margin-bottom: ${rem(size.base)};
  }
`;

const ContentWrapper = styled.div`
  padding: ${size.huge}px 0;
  font-weight: ${fontWeight.regular};
  ${font.large()};
`;

export default IndexPage;
