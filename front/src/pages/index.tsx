import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React from 'react';
import { GlobalStyles } from '../ui/GlobalStyles';

import { Helmet } from 'react-helmet';
import { Gainburua } from '../components/Gainburua';
import styled from 'styled-components';
import { font, fontWeight, size } from '../ui/theme';
import { Container } from '../components/Container';
import { rem } from 'polished';
import ReactMarkdown from 'react-markdown';
import { Oina } from '../components/Oina';

interface DataProps {
  strapiHasiera: {
    deskribapena: string;
    izenburua: string;
    edukia?: string;
  };
}

const IndexPage: React.VFC<PageProps> = () => {
  const { strapiHasiera } = useStaticQuery<DataProps>(graphql`
    {
      strapiHasiera {
        deskribapena
        izenburua
        edukia
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
        </Container>
      </ContentWrapper>

      <Oina />
    </>
  );
};

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
