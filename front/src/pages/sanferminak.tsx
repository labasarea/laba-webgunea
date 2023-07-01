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
  strapiHasiera: {
    deskribapena: string;
    izenburua: string;
    edukia?: string;
    sf_egunak?: SFEguna[];
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
        atala="sanferminak"
        izenburua={strapiHasiera.izenburua}
        deskribapena={strapiHasiera.deskribapena}
        onClick={() => {
          navigate('/sanferminak#edukia');
        }}
      />

      <ContentWrapper id="edukia">
        <Container>
          {strapiHasiera.edukia && (
            <Deskribapena>{strapiHasiera.edukia}</Deskribapena>
          )}

          {strapiHasiera.sf_egunak && strapiHasiera.sf_egunak.length > 0 && (
            <SFEgunZerrenda>
              {strapiHasiera.sf_egunak.map(sfeguna => (
                <SFEgunaElementua key={sfeguna.id}>
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
