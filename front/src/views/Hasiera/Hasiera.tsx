import React from 'react';
import ReactMarkdown from 'react-markdown';

import { rem } from 'polished';
import { styled } from 'styled-components';

import Gezia from '../../assets/gezia.svg';
import { Container } from '../../components/Container';
import { Gainburua } from '../../components/Gainburua';
import { Oina } from '../../components/Oina';
import { colors, font, fontWeight, size } from '../../ui/theme';
import * as styles from './Hasiera.module.scss';
import { HasieraContent } from './HasieraContent';

interface Props {
  content: HasieraContent;
}

export const Hasiera: React.FC<Props> = ({ content }) => {
  const { izenburua, deskribapena, edukia } = content;
  return (
    <>
      <Gainburua
        atala="hasiera"
        izenburua={izenburua}
        deskribapena={deskribapena}
      />

      <div className={styles.contentWrapper} id="edukia">
        <Container>
          <Deskribapena>{edukia}</Deskribapena>

          <IzanLabaWrapper>
            <Botoia href="https://forms.gle/wV41CVkRX1JtHsAu9">
              <GeziaLogo /> Labazkidetu.
            </Botoia>
          </IzanLabaWrapper>
        </Container>
      </div>

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

  &:focus {
    border: 2px solid ${colors.zuria};
    outline: 3px solid ${colors.morea};
  }
`;

const GeziaLogo = styled(Gezia)`
  margin-right: ${rem(size.tiny)};
`;

const IzanLabaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
