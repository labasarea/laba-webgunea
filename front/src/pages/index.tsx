import { graphql, Link, PageProps, useStaticQuery } from 'gatsby';
import React from 'react';
import { GlobalStyles } from '../ui/GlobalStyles';

import { Helmet } from 'react-helmet';
import { Gainburua } from '../components/Gainburua';
import styled from 'styled-components';
import { colors, font, fontWeight, size } from '../ui/theme';
import { Container } from '../components/Container';
import { rem } from 'polished';
import Gezia from '../assets/gezia.svg';
import ReactMarkdown from 'react-markdown';

interface DataProps {
  strapiHasiera: {
    data: {
      attributes: {
        deskribapena: string;
        izenburua: string;
        bazkidetza: string;
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
            bazkidetza
          }
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        title={`${strapiHasiera.data.attributes.izenburua} | Laba`}
        htmlAttributes={{ lang: 'eu' }}
      >
        <meta
          name="description"
          content={strapiHasiera.data.attributes.deskribapena}
        />
      </Helmet>

      <GlobalStyles />

      <Gainburua
        atala="hasiera"
        izenburua={strapiHasiera.data.attributes.izenburua}
        deskribapena={strapiHasiera.data.attributes.deskribapena}
      />

      <ContentWrapper>
        <Container>
          <Deskribapena>
            {strapiHasiera.data.attributes.bazkidetza}
          </Deskribapena>

          <IzanLabaWrapper>
            <Link to="https://forms.gle/sRq2ejXqv6q88sQe9">
              <Botoia>
                <GeziaLogo /> Izan Laba.
              </Botoia>
            </Link>
          </IzanLabaWrapper>
        </Container>
      </ContentWrapper>
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

const Botoia = styled.button`
  border: 2px solid ${colors.beltza};
  ${font.large()};
  padding: ${rem(size.base)};
  background: ${colors.zuria};
  font-weight: ${fontWeight.bold};
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const GeziaLogo = styled(Gezia)`
  margin-right: ${rem(size.tiny)};
`;

const IzanLabaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default IndexPage;
