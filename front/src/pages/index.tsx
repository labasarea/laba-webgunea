import { graphql, navigate, PageProps, useStaticQuery } from 'gatsby';
import React from 'react';
import { GlobalStyles } from '../ui/GlobalStyles';

import { Gainburua } from '../components/Gainburua';
import styled from 'styled-components';
import { colors, font, fontWeight, size } from '../ui/theme';
import { Container } from '../components/Container';
import { rem } from 'polished';
import Gezia from '../assets/gezia.svg';
import ReactMarkdown from 'react-markdown';
import { Oina } from '../components/Oina';
import { SEO } from '../components/SEO';

interface DataProps {
  strapiHasiera: {
    deskribapena: string;
    izenburua: string;
    edukia: string;
  };
}

const IndexPage: React.VFC<PageProps> = ({ location }) => {
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
      <SEO
        title={strapiHasiera.izenburua}
        description={strapiHasiera.deskribapena}
        location={location}
      />

      <GlobalStyles />

      <Gainburua
        atala="hasiera"
        izenburua={strapiHasiera.izenburua}
        deskribapena={strapiHasiera.deskribapena}
        onClick={() => {
          navigate('/#edukia');
        }}
      />

      <ContentWrapper id="edukia">
        <Container>
          <Deskribapena>{strapiHasiera.edukia}</Deskribapena>

          <IzanLabaWrapper>
            <Botoia href="https://forms.gle/wV41CVkRX1JtHsAu9">
              <GeziaLogo /> Labazkidetu.
            </Botoia>
          </IzanLabaWrapper>
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

const Botoia = styled.a`
  border: 2px solid ${colors.beltza};
  ${font.large()};
  padding: ${rem(size.base)};
  background: ${colors.zuria};
  font-weight: ${fontWeight.bold};
  cursor: pointer;
  display: flex;
  align-items: center;

  transition: color 0.4s ease;
  &:hover {
    color: ${colors.morea};
  }
`;

const GeziaLogo = styled(Gezia)`
  margin-right: ${rem(size.tiny)};
`;

const IzanLabaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default IndexPage;
