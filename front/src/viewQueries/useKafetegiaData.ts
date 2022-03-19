import { graphql, useStaticQuery } from 'gatsby';
import { ProduktuaDTO } from '../domain/dtos/ProduktuaDTO';
import { produktuaFactory } from '../domain/factories/produktuaFactory';
import { KafetegiaData } from './KafetegiaData';

interface DataProps {
  kafetegia: {
    data: {
      attributes: {
        deskribapena: string;
        izenburua: string;
        edariBeroak: ProduktuaDTO[];
        infusioEkologikoak: ProduktuaDTO[];
        edariHotzak: ProduktuaDTO[];
        pikatzekoak: ProduktuaDTO[];
        gozoak: ProduktuaDTO[];
        anizkoJogurta: ProduktuaDTO;
        tostadak: ProduktuaDTO[];
      };
    };
  };
}

export function useKafetegiaData(): KafetegiaData {
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

  return {
    izenburua,
    deskribapena,
    anizkoJogurta: produktuaFactory(anizkoJogurta),
    edariBeroak: edariBeroak.map(produktuaFactory),
    edariHotzak: edariHotzak.map(produktuaFactory),
    infusioEkologikoak: infusioEkologikoak.map(produktuaFactory),
    pikatzekoak: pikatzekoak.map(produktuaFactory),
    gozoak: gozoak.map(produktuaFactory),
    tostadak: tostadak.map(produktuaFactory),
  };
}
