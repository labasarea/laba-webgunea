import { graphql, useStaticQuery } from 'gatsby';

import { ProduktuaDTO } from '../dtos/ProduktuaDTO';
import { KafetegiaContent } from '../KafetegiaContent';

export type MenuKonponentea =
  | {
      konponentea: 'StrapiComponentKafetegiaIzenburua';
      id: string;
      izenburuBalioa: string;
    }
  | {
      konponentea: 'StrapiComponentKafetegiaProduktuTaldea';
      id: string;
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

export function useKafetegiaContent(): KafetegiaContent {
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
            id
            izenburua
            produktuak {
              id
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
