import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React from 'react';
import { GlobalStyles } from '../ui/GlobalStyles';

import { Helmet } from 'react-helmet';
import { Container } from '../components/Container';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { font, fontWeight, size } from '../ui/theme';
import { rem } from 'polished';
import { Gainburua } from '../components/Gainburua';
import { Oina } from '../components/Oina';

interface DataProps {
  strapiLegeOharra: {
    izenburua: string;
    edukia: string;
  };
}

const LegeOharra: React.VFC<PageProps> = () => {
  const { strapiLegeOharra } = useStaticQuery<DataProps>(graphql`
    {
      strapiLegeOharra {
        izenburua
        edukia
      }
    }
  `);

  return (
    <>
      <Helmet
        title={`${strapiLegeOharra.izenburua} | Laba`}
        htmlAttributes={{ lang: 'eu' }}
      />

      <GlobalStyles />

      <Gainburua />

      <Container>
        <Atala>
          <Edukia>{strapiLegeOharra.edukia}</Edukia>
        </Atala>
      </Container>

      <Oina />
    </>
  );
};

const Atala = styled.section`
  padding-top: ${rem(size.base)};
`;

const Edukia = styled(ReactMarkdown)`
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
`;

export default LegeOharra;
