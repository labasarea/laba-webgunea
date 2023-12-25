import React from 'react';

import { rem } from 'polished';
import { styled } from 'styled-components';

import BeganoaLogo from '../../assets/beganoa.svg';
import EkologikoaLogo from '../../assets/ekologikoa.svg';
import { AlergenoLegenda } from '../../components/AlergenoLegenda';
import { Container } from '../../components/Container';
import { Gainburua } from '../../components/Gainburua';
import { Oina } from '../../components/Oina';
import { produktuaFactory } from '../../domain/factories/produktuaFactory';
import { Produktua } from '../../domain/models/Produktua';
import { colors, font, fontWeight, media, size } from '../../ui/theme';
import { KafetegiaData } from '../../viewQueries/KafetegiaData';

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

const ProduktuZerrenda: React.FC<{
  produktuZerrenda: Produktua[];
  izena?: React.ReactNode;
}> = ({ produktuZerrenda, izena }) => (
  <ProduktuTaula>
    {izena && <ProduktuMota>{izena}</ProduktuMota>}

    <tbody>
      {produktuZerrenda.map(produktua => (
        <tr key={produktua.id}>
          <Ezaugarria>
            {produktua.beganoa && <BeganoaLogo title="Produktu beganoa" />}
          </Ezaugarria>
          <Ezaugarria>
            {produktua.ekologikoa && (
              <EkologikoaLogo title="Produktu ekologikoa" />
            )}
          </Ezaugarria>
          <Izena scope="row">
            {produktua.izena}{' '}
            {produktua.alergenoak.map(alergenoa => (
              <Alergenoa>{alergenoa.zenbakia}</Alergenoa>
            ))}
          </Izena>
          <Prezioa>
            {new Intl.NumberFormat('eu-ES', {
              style: 'currency',
              currency: 'EUR',
            }).format(produktua.prezioa)}
          </Prezioa>
        </tr>
      ))}
    </tbody>
  </ProduktuTaula>
);

const Alergenoa = styled.span`
  color: ${colors.morea};
  font-weight: ${fontWeight.bold};

  &:not(:last-child)::after {
    content: ', ';
  }
`;

const ProduktuTaula = styled.table`
  width: 100%;
  table-layout: fixed;
  overflow-wrap: break-word;
  border-collapse: separate;
  border-spacing: 0 ${size.tiny}px;

  ${media.tablet`
    border-spacing: 0 ${size.xtiny}px;
  `}
`;

const Ezaugarria = styled.td`
  width: ${size.base}px;
  height: ${size.base}px;
  padding: 0 ${size.xtiny}px;
  vertical-align: top;

  ${media.tablet`
    width: ${size.medium}px;
    height: ${size.medium}px;
  `}
`;

const Izena = styled.td`
  text-align: left;
  font-weight: ${fontWeight.regular};
  padding: 0 ${size.xtiny}px;
  vertical-align: top;
`;

const Prezioa = styled.td`
  width: ${size.huge}px;
  text-align: right;
  font-weight: ${fontWeight.regular};
  padding: 0 ${size.xtiny}px;
  vertical-align: top;
`;

const ProduktuMota = styled.caption`
  ${font.large()};
  text-align: left;
  padding-left: 52px;
  margin-bottom: ${rem(size.mini)};

  &::after {
    content: '.';
  }

  ${media.tablet`
    padding-left: 67px;
  `}
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
