import React from 'react';

import { rem } from 'polished';
import { styled } from 'styled-components';

import { AlergenoLegenda } from '../../components/AlergenoLegenda';
import { Container } from '../../components/Container';
import { Gainburua } from '../../components/Gainburua';
import { Oina } from '../../components/Oina';
import { produktuaFactory } from '../../domain/factories/produktuaFactory';
import { colors, font, size } from '../../ui/theme';
import { KafetegiaData } from '../../viewQueries/KafetegiaData';
import { ProduktuZerrenda } from './components/ProduktuZerrenda';

export const Kafetegia: React.FC<{ content: KafetegiaData }> = ({
  content,
}) => {
  const { izenburua, deskribapena, menua } = content;

  // oraingoz menuak alergenorik ez duenez, ezkutatuko dugu
  // TODO modu dinamikoan aldatu balio hau
  const hasAlergenoak = false;

  return (
    <>
      <Gainburua
        atala="kafetegia"
        izenburua={izenburua}
        deskribapena={deskribapena}
      />

      <ContentWrapper id="edukia">
        <Container>
          {menua.map(konponentea => {
            if (
              konponentea.konponentea ===
              'StrapiComponentKafetegiaProduktuTaldea'
            ) {
              return (
                <ZerrendaWrapper key={konponentea.id}>
                  <ProduktuZerrenda
                    izena={konponentea.izenburua}
                    produktuZerrenda={konponentea.produktuak.map(
                      produktuaFactory,
                    )}
                  />
                </ZerrendaWrapper>
              );
            }

            if (
              konponentea.konponentea === 'StrapiComponentKafetegiaIzenburua'
            ) {
              return (
                <IzenburuWrapper key={konponentea.id}>
                  <Marra />
                  <Izenburua>{konponentea.izenburuBalioa}</Izenburua>
                </IzenburuWrapper>
              );
            }
          })}

          {hasAlergenoak && (
            <TaldeWrapper>
              <IzenburuWrapper>
                <Marra />
                <Izenburua>Alergenoak</Izenburua>
              </IzenburuWrapper>

              <AlergenoLegenda />
            </TaldeWrapper>
          )}

          <OnEgin>
            <p>On egin!</p>
          </OnEgin>
        </Container>
      </ContentWrapper>

      <Oina />
    </>
  );
};

const OnEgin = styled.div`
  text-align: center;
  ${font.gargantuan()};
`;

const ContentWrapper = styled.div`
  padding: ${size.huge}px 0;
`;

const TaldeWrapper = styled.section`
  margin-bottom: ${size.large}px;
`;

const ZerrendaWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: ${size.base}px;
  }
`;

const IzenburuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: ${rem(size.medium)};
`;

const Marra = styled.div`
  /* altuera erabiliko den letraren berdina da */
  height: ${rem(41.83)};
  flex-grow: 1;
  box-shadow: inset 0px -3px 0px 0px ${colors.beltza};
  margin-right: ${rem(size.tiny)};
`;

const Izenburua = styled.h1`
  text-align: right;
  vertical-align: bottom;

  &:after {
    content: '.';
  }

  ${font.gargantuan()};
`;
