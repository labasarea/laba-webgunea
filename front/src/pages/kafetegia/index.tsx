import { PageProps } from 'gatsby';
import React from 'react';
import { GlobalStyles } from '../../ui/GlobalStyles';

import { Helmet } from 'react-helmet';
import { Gainburua } from '../../components/Gainburua';
import { Container } from '../../components/Container';
import styled from 'styled-components';
import { colors, font, fontWeight, size } from '../../ui/theme';

import BeganoaLogo from '../../assets/beganoa.svg';
import EkologikoaLogo from '../../assets/ekologikoa.svg';
import { rem } from 'polished';
import { Produktua } from '../../domain/models/Produktua';
import { useKafetegiaData } from './useKafetegiaData';
import { AlergenoLegenda } from './components/AlergenoLegenda';

const Kafetegia: React.VFC<PageProps> = () => {
  const {
    izenburua,
    deskribapena,
    anizkoJogurta,
    edariBeroak,
    edariHotzak,
    infusioEkologikoak,
    pikatzekoak,
    gozoak,
    tostadak,
  } = useKafetegiaData();

  return (
    <>
      <Helmet title={`${izenburua} | Laba`} htmlAttributes={{ lang: 'eu' }}>
        <meta name="description" content={deskribapena} />
      </Helmet>

      <GlobalStyles />

      <Gainburua
        atala="kafetegia"
        izenburua={izenburua}
        deskribapena={deskribapena}
      />

      <Container>
        <ContentWrapper>
          <TaldeWrapper>
            <IzenburuWrapper>
              <Marra />
              <Izenburua>Edariak</Izenburua>
            </IzenburuWrapper>
            <ZerrendaWrapper>
              <ProduktuZerrenda
                izena="Edari beroak"
                produktuZerrenda={edariBeroak}
              />
            </ZerrendaWrapper>
            <ZerrendaWrapper>
              <ProduktuZerrenda
                izena="Infusio ekologikoak"
                produktuZerrenda={infusioEkologikoak}
              />
            </ZerrendaWrapper>
            <ZerrendaWrapper>
              <ProduktuZerrenda
                izena="Edari hotzak"
                produktuZerrenda={edariHotzak}
              />
            </ZerrendaWrapper>
          </TaldeWrapper>

          <TaldeWrapper>
            <IzenburuWrapper>
              <Marra />
              <Izenburua>Jakiak</Izenburua>
            </IzenburuWrapper>
            <ZerrendaWrapper>
              <ProduktuZerrenda
                izena="Pikatzekoak"
                produktuZerrenda={pikatzekoak}
              />
            </ZerrendaWrapper>
            <ZerrendaWrapper>
              <ProduktuZerrenda izena="Tostadak" produktuZerrenda={tostadak} />
            </ZerrendaWrapper>
            <ZerrendaWrapper>
              <ProduktuZerrenda izena="Gozoak" produktuZerrenda={gozoak} />
            </ZerrendaWrapper>
            <ZerrendaWrapper>
              <ProduktuZerrenda
                izena="Anizko Jogurta"
                produktuZerrenda={[anizkoJogurta]}
              />
            </ZerrendaWrapper>
          </TaldeWrapper>

          <TaldeWrapper>
            <IzenburuWrapper>
              <Marra />
              <Izenburua>Alergenoak</Izenburua>
            </IzenburuWrapper>

            <AlergenoLegenda />
          </TaldeWrapper>
        </ContentWrapper>
      </Container>
    </>
  );
};

const ContentWrapper = styled.div`
  padding: ${size.huge}px 0;
`;

const TaldeWrapper = styled.section`
  &:not(:last-child) {
    margin-bottom: ${size.large}px;
  }
`;

const ZerrendaWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: ${size.base}px;
  }
`;

const ProduktuZerrenda: React.FC<{
  produktuZerrenda: Produktua[];
  izena: React.ReactNode;
}> = ({ produktuZerrenda, izena }) => (
  <ProduktuTaula>
    <ProduktuMota>{izena}</ProduktuMota>

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
`;

const Ezaugarria = styled.td`
  width: ${size.medium}px;
  height: ${size.medium}px;
  padding: 0 ${size.xtiny}px;
  vertical-align: top;
`;

const Izena = styled.td`
  text-align: left;
  font-weight: ${fontWeight.regular};
  padding: 0 ${size.xtiny}px;
  vertical-align: top;
`;

const Prezioa = styled.td`
  min-width: ${size.medium}px;
  text-align: right;
  font-weight: ${fontWeight.regular};
  padding: 0 ${size.xtiny}px;
  vertical-align: top;
`;

const ProduktuMota = styled.caption`
  ${font.large()};
  text-align: left;
  padding-left: 67px;
  margin-bottom: ${rem(size.mini)};

  &::after {
    content: '.';
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

export default Kafetegia;
