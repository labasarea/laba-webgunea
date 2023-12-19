import { graphql, useStaticQuery } from 'gatsby';
import { ProduktuaDTO } from '../domain/dtos/ProduktuaDTO';
import { KafetegiaData } from './KafetegiaData';

export type MenuKonponentea =
  | {
      konponentea: 'StrapiComponentKafetegiaIzenburua';
      izenburuBalioa: string;
    }
  | {
      konponentea: 'StrapiComponentKafetegiaProduktuTaldea';
      izenburua: string;
      produktuak: ProduktuaDTO[];
    };

interface DataProps {
  strapiKafetegia: {
    deskribapena: string;
    izenburua: string;
    menua: MenuKonponentea[];
  };
}

export function useKafetegiaData(): KafetegiaData {
  const {
    strapiKafetegia: { izenburua, deskribapena, menua },
  } = useStaticQuery<DataProps>(graphql`
    {
      strapiKafetegia {
        izenburua
        deskribapena
        menua {
          konponentea: __typename
          ... on StrapiComponentKafetegiaIzenburua {
            izenburuBalioa
            id
          }
          ... on StrapiComponentKafetegiaProduktuTaldea {
            izenburua
            produktuak {
              izena
              prezioa
              beganoa
              ekologikoa
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
    menua,
  };
}
