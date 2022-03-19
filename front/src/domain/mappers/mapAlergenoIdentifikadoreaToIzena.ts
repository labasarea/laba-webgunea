import { AlergenoIdentifikadorea } from '../models/AlergenoIdentifikadorea';

export function mapAlergenoIdentifikadoreaToIzena(
  identifikadorea: AlergenoIdentifikadorea,
): string {
  const dictionary: { [key in AlergenoIdentifikadorea]: string } = {
    apioa: 'Apioa',
    arraina: 'Arraina',
    arrautzak: 'Arrautzak',
    esnekiak: 'Esnekiak',
    fruituLehorrak: 'Fruitu Lehorrak',
    glutena: 'Glutena',
    kakahueteak: 'Kakahueteak',
    krustazeoak: 'Krustazeoak',
    lupinuak: 'Lupinuak',
    moluskuak: 'Moluskuak',
    sesamoa: 'Sesamoa',
    soja: 'Soja',
    ziapea: 'Ziapea',
    sulfitoak: 'Sulfitoak',
  };

  return dictionary[identifikadorea];
}
