import { graphql, PageProps, useStaticQuery } from 'gatsby';
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
import { datesUtils } from '../utils/dateUtils';

interface DataProps {
  strapiHasiera: {
    deskribapena: string;
    izenburua: string;
    edukia?: string;
    sf_egunak?: {
      id: string;
      eguna: string;
      ekitaldi_nagusia: { id: string; hitzordua: string; izenburua: string };
    }[];
  };
}

const IndexPage: React.VFC<PageProps> = () => {
  const { strapiHasiera } = useStaticQuery<DataProps>(graphql`
    {
      strapiHasiera {
        deskribapena
        izenburua
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
        title={`${strapiHasiera.izenburua} | Laba`}
        htmlAttributes={{ lang: 'eu' }}
      >
        <meta name="description" content={strapiHasiera.deskribapena} />
      </Helmet>

      <GlobalStyles />

      <Gainburua
        atala="hasiera"
        izenburua={strapiHasiera.izenburua}
        deskribapena={strapiHasiera.deskribapena}
        onClick={() => {
          window.location.replace('/#edukia');
        }}
      />

      <ContentWrapper id="edukia">
        <Container>
          {strapiHasiera.edukia && (
            <Deskribapena>{strapiHasiera.edukia}</Deskribapena>
          )}

          {strapiHasiera.sf_egunak && strapiHasiera.sf_egunak.length > 0 && (
            <SFEgunZerrenda>
              {strapiHasiera.sf_egunak.map(
                ({ eguna, id, ekitaldi_nagusia }) => (
                  <SFEguna key={id}>
                    <SFEgunEdukia>
                      <SFEgunaEguna>
                        Uztailak {new Date(eguna).getDate()}.
                      </SFEgunaEguna>

                      <SFEgunaNagusiaOrdua>
                        {datesUtils.getHour(
                          new Date(ekitaldi_nagusia.hitzordua),
                        )}
                      </SFEgunaNagusiaOrdua>

                      <SFEgunaNagusiaIzenburua>
                        {ekitaldi_nagusia.izenburua}
                      </SFEgunaNagusiaIzenburua>
                    </SFEgunEdukia>
                  </SFEguna>
                ),
              )}
            </SFEgunZerrenda>
          )}
        </Container>
      </ContentWrapper>

      <Oina />
    </>
  );
};

const SFEgunaEguna = styled.p`
  margin-bottom: ${rem(size.base)};

  ${font.large()};
  color: ${colors.zuria};
`;

const SFEgunaNagusiaIzenburua = styled.h2`
  ${font.large()};
  color: ${colors.zuria};
  font-weight: ${fontWeight.bold};
  text-align: center;
`;

const SFEgunaNagusiaOrdua = styled.p`
  ${font.base()};
  color: ${colors.zuria};
  font-weight: ${fontWeight.bold};
  text-align: center;
`;

const SFEgunZerrenda = styled.ul`
  ${media.tablet`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${rem(size.mini)};
    grid-row-gap: ${rem(size.mini)};
  `}
`;

const SFEgunEdukia = styled.div`
  padding: ${rem(size.tiny)};
`;

const SFEguna = styled.li`
  margin-bottom: ${rem(size.base)};

  width: 100%;
  background-color: ${colors.gorria};

  ${media.tablet`
    height: 0;
    padding-bottom: 100%;
    margin-bottom: 0;
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
