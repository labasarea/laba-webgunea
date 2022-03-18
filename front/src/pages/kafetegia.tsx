import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React from 'react';
import { GlobalStyles } from '../ui/GlobalStyles';

import { Helmet } from 'react-helmet';
import { Gainburua } from '../components/Gainburua';
import { Container } from '../components/Container';
import styled from 'styled-components';
import { font } from '../ui/theme';

type Alergenoa =
  | 'apioa'
  | 'arraina'
  | 'arrautzak'
  | 'esnekiak'
  | 'fruituLehorrak'
  | 'glutena'
  | 'kakahueteak'
  | 'krustazeoak'
  | 'lupinuak'
  | 'moluskuak'
  | 'sesamoa'
  | 'soja'
  | 'sulfitoak'
  | 'ziapea';

interface Produktua {
  id: string;
  izena: string;
  prezioa: number;
  ekologikoa: boolean;
  beganoa: boolean;
  alergenoak: {
    [alergenoa in Alergenoa]: boolean;
  };
}
interface DataProps {
  kafetegia: {
    data: {
      attributes: {
        deskribapena: string;
        izenburua: string;
        edariBeroak: Produktua[];
        infusioEkologikoak: Produktua[];
        edariHotzak: Produktua[];
        pikatzekoak: Produktua[];
        gozoak: Produktua[];
        anizkoJogurta: Produktua;
        tostadak: Produktua[];
      };
    };
  };
}

const Kafetegia: React.VFC<PageProps> = () => {
  const {
    kafetegia: {
      data: {
        attributes: {
          izenburua,
          deskribapena,
          anizkoJogurta,
          edariBeroak,
          edariHotzak,
          infusioEkologikoak,
          pikatzekoak,
          gozoak,
          tostadak,
        },
      },
    },
  } = useStaticQuery<DataProps>(graphql`
    {
      kafetegia {
        data {
          attributes {
            izenburua
            deskribapena
            anizkoJogurta {
              alergenoak {
                apioa
                arraina
                arrautzak
                esnekiak
                fruituLehorrak
                glutena
                kakahueteak
                krustazeoak
                lupinuak
                moluskuak
                sesamoa
                soja
                sulfitoak
                ziapea
              }
              beganoa
              ekologikoa
              izena
              prezioa
              id__normalized
            }
            edariBeroak {
              id
              ekologikoa
              beganoa
              izena
              prezioa
              alergenoak {
                apioa
                arraina
                arrautzak
                esnekiak
                fruituLehorrak
                glutena
                kakahueteak
                krustazeoak
                lupinuak
                moluskuak
                sesamoa
                soja
                sulfitoak
                ziapea
              }
            }
            edariHotzak {
              id
              ekologikoa
              beganoa
              izena
              prezioa
              alergenoak {
                apioa
                arraina
                arrautzak
                esnekiak
                fruituLehorrak
                glutena
                kakahueteak
                krustazeoak
                lupinuak
                moluskuak
                sesamoa
                soja
                sulfitoak
                ziapea
              }
            }
            infusioEkologikoak {
              id
              ekologikoa
              beganoa
              izena
              prezioa
              alergenoak {
                apioa
                arraina
                arrautzak
                esnekiak
                fruituLehorrak
                glutena
                kakahueteak
                krustazeoak
                lupinuak
                moluskuak
                sesamoa
                soja
                sulfitoak
                ziapea
              }
            }
            pikatzekoak {
              id
              ekologikoa
              beganoa
              izena
              prezioa
              alergenoak {
                apioa
                arraina
                arrautzak
                esnekiak
                fruituLehorrak
                glutena
                kakahueteak
                krustazeoak
                lupinuak
                moluskuak
                sesamoa
                soja
                sulfitoak
                ziapea
              }
            }
            gozoak {
              id
              ekologikoa
              beganoa
              izena
              prezioa
              alergenoak {
                apioa
                arraina
                arrautzak
                esnekiak
                fruituLehorrak
                glutena
                kakahueteak
                krustazeoak
                lupinuak
                moluskuak
                sesamoa
                soja
                sulfitoak
                ziapea
              }
            }
            tostadak {
              id
              ekologikoa
              beganoa
              izena
              prezioa
              alergenoak {
                apioa
                arraina
                arrautzak
                esnekiak
                fruituLehorrak
                glutena
                kakahueteak
                krustazeoak
                lupinuak
                moluskuak
                sesamoa
                soja
                sulfitoak
                ziapea
              }
            }
          }
        }
      }
    }
  `);

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
        <section>
          <ProduktuTaldea>Edariak</ProduktuTaldea>
          <ProduktuMota>Edari beroak</ProduktuMota>
          <ul>
            {edariBeroak.map(produktua => (
              <li key={produktua.id}>{produktua.izena}</li>
            ))}
          </ul>

          <ProduktuMota>Infusio ekologikoak</ProduktuMota>
          <ul>
            {infusioEkologikoak.map(produktua => (
              <li key={produktua.id}>{produktua.izena}</li>
            ))}
          </ul>

          <ProduktuMota>Edari hotzak</ProduktuMota>
          <ul>
            {edariHotzak.map(produktua => (
              <li key={produktua.id}>{produktua.izena}</li>
            ))}
          </ul>
        </section>

        <section>
          <ProduktuTaldea>Jakiak</ProduktuTaldea>
          <ProduktuMota>Pikatzekoak</ProduktuMota>
          <ul>
            {pikatzekoak.map(produktua => (
              <li key={produktua.id}>{produktua.izena}</li>
            ))}
          </ul>

          <ProduktuMota>Tostadak</ProduktuMota>
          <ul>
            {tostadak.map(produktua => (
              <li key={produktua.id}>{produktua.izena}</li>
            ))}
          </ul>

          <ProduktuMota>Gozoak</ProduktuMota>
          <ul>
            {gozoak.map(produktua => (
              <li key={produktua.id}>{produktua.izena}</li>
            ))}
          </ul>

          <ProduktuMota>Anizko Jogurta</ProduktuMota>
          <ul>
            <li key={anizkoJogurta.id}>{anizkoJogurta.izena}</li>
          </ul>
        </section>
      </Container>
    </>
  );
};

const ProduktuTaldea = styled.h1`
  ${font.gargantuan()};

  &::after {
    content: '.';
  }
`;

const ProduktuMota = styled.h2`
  ${font.large()};

  &::after {
    content: '.';
  }
`;

export default Kafetegia;
