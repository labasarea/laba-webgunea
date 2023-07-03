import { graphql, navigate, PageProps, useStaticQuery } from 'gatsby';
import React from 'react';
import { GlobalStyles } from '../ui/GlobalStyles';

import { Gainburua } from '../components/Gainburua';
import styled from 'styled-components';
import { colors, font, fontWeight, media, size } from '../ui/theme';
import { Container } from '../components/Container';
import { rem, rgba } from 'polished';
import ReactMarkdown from 'react-markdown';
import { Oina } from '../components/Oina';
import { SFEgunaEdukia } from '../components/SFEgunaEdukia';
import { datesUtils } from '../utils/dateUtils';
import { SEO } from '../components/SEO';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

export interface SFEguna {
  id: string;
  eguna: string;
  ekitaldi_nagusia: {
    id: string;
    hitzordua: string;
    izenburua: string;
  };
  kartela?: { file: ImageDataLike };
  atzealde_irudia?: { file: ImageDataLike };
}

interface DataProps {
  strapiSanferminak: {
    datu_orokorrak: {
      deskribapena: string;
      izenburua: string;
    };
    edukia?: string;
    sf_egunak: SFEguna[];
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
          kartela {
            alternativeText
            file {
              childImageSharp {
                gatsbyImageData(width: 300, aspectRatio: 1)
              }
            }
          }
          atzealde_irudia {
            alternativeText
            file {
              childImageSharp {
                gatsbyImageData(width: 300, aspectRatio: 1)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />

      <SEO
        location={location}
        title={strapiSanferminak.datu_orokorrak.izenburua}
        description={strapiSanferminak.datu_orokorrak.izenburua}
      />

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
                {strapiSanferminak.sf_egunak.map(sfeguna => {
                  return (
                    <SFEgunaElementua key={sfeguna.id}>
                      {sfeguna.atzealde_irudia && (
                        <AtzealdeIrudia
                          alt="Irudia"
                          image={getImage(sfeguna.atzealde_irudia.file)}
                        />
                      )}

                      <EdukiaWrapper
                        className={
                          datesUtils.isToday(new Date(sfeguna.eguna))
                            ? 'active'
                            : ''
                        }
                      >
                        <SFEgunaEdukia sfeguna={sfeguna} />
                      </EdukiaWrapper>
                    </SFEgunaElementua>
                  );
                })}
              </SFEgunZerrenda>
            )}
        </Container>
      </ContentWrapper>

      <Oina />
    </>
  );
};

const AtzealdeIrudia = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: -1;
`;

const EdukiaWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  padding: ${rem(size.small)};

  background-color: ${colors.beltza};
  transition: background-color 1s ease;

  &:hover {
    background-color: ${rgba(colors.beltza, 0.8)};
  }

  &.active {
    @keyframes mymove {
      0% {
        background-color: ${colors.beltza};
      }
      33% {
        background-color: ${colors.gorria};
      }
      66% {
        background-color: ${colors.beltza};
      }
    }

    animation: mymove 4s infinite;
  }
`;

const SFEgunaElementua = styled.li`
  position: relative;
  width: 100%;

  color: ${colors.zuria};

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
