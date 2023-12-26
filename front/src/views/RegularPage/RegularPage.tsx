import React from 'react';
import ReactMarkdown from 'react-markdown';

import { rem } from 'polished';
import remarkGfm from 'remark-gfm';
import { styled } from 'styled-components';

import { Container } from '../../components/Container';
import { Gainburua } from '../../components/Gainburua';
import { Oina } from '../../components/Oina';
import { colors, font, fontWeight, size } from '../../ui/theme';
import { RegularPageContent } from './RegularPageContent';

interface Props {
  content: RegularPageContent;
}

export const RegularPage: React.FC<Props> = ({ content }) => {
  const { edukia } = content;

  return (
    <>
      <Gainburua />

      <Container>
        <Atala>
          <Edukia>{edukia}</Edukia>
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
    border: 2px solid ${colors.beltza};
    margin-bottom: ${rem(size.base)};
    margin-top: ${rem(size.base)};
  }
`;
