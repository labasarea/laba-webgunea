import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React from 'react';
import { GlobalStyles } from '../ui/GlobalStyles';
import remarkGfm from 'remark-gfm';

import { Helmet } from 'react-helmet';
import { Container } from '../components/Container';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { colors, font, fontWeight, size } from '../ui/theme';
import { rem } from 'polished';
import { Gainburua } from '../components/Gainburua';
import { Oina } from '../components/Oina';

interface DataProps {
  strapiPribatutasunPolitika: {
    data: {
      attributes: {
        izenburua: string;
        edukia: string;
      };
    };
  };
}

const PribatutasunPolitika: React.VFC<PageProps> = () => {
  const { strapiPribatutasunPolitika } = useStaticQuery<DataProps>(graphql`
    {
      strapiPribatutasunPolitika {
        data {
          attributes {
            izenburua
            edukia
          }
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        title={`${strapiPribatutasunPolitika.data.attributes.izenburua} | Laba`}
        htmlAttributes={{ lang: 'eu' }}
      />

      <GlobalStyles />

      <Gainburua />

      <Container>
        <Atala>
          <Edukia>{strapiPribatutasunPolitika.data.attributes.edukia}</Edukia>
        </Atala>
      </Container>

      <Oina />
    </>
  );
};

const Atala = styled.section`
  padding-top: ${rem(size.base)};
`;

const Edukia = styled(ReactMarkdown).attrs({ remarkPlugins: [remarkGfm] })`
  font-weight: ${fontWeight.regular};
  ${font.base()};

  p:not(-last-child) {
    margin-bottom: ${rem(size.base)};
  }

  h1 {
    ${font.gargantuan()};
    font-weight: ${fontWeight.bold};
    margin-bottom: ${rem(size.base)};
  }

  h2 {
    ${font.huge()};
    font-weight: ${fontWeight.bold};
    margin-bottom: ${rem(size.base)};
  }

  h3 {
    ${font.large()};
    font-weight: ${fontWeight.bold};
    margin-bottom: ${rem(size.base)};
  }

  h4 {
    font-weight: ${fontWeight.bold};
    margin-bottom: ${rem(size.mini)};
  }

  ul {
    margin-bottom: ${rem(size.base)};
  }

  li {
    list-style: disc inside;
    margin-bottom: ${rem(size.small)};
  }

  table {
    margin-bottom: ${rem(size.base)};
  }

  th {
    padding: ${size.small}px;
  }

  td {
    padding: ${size.small}px;
    border: 1px solid ${colors.beltza};
  }

  hr {
    border: 2px solid ${colors.horia};
    margin-bottom: ${rem(size.base)};
    margin-top: ${rem(size.base)};
  }
`;

export default PribatutasunPolitika;
