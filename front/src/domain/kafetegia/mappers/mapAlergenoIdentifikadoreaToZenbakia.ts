import { AlergenoIdentifikadorea } from '../models/AlergenoIdentifikadorea';

export function mapAlergenoIdentifikadoreaToZenbakia(
  identifikadorea: AlergenoIdentifikadorea,
): string {
  const dictionary: { [key in AlergenoIdentifikadorea]: string } = {
    esnekiak: '1',
    arrautzak: '2',
    glutena: '3',
    moluskuak: '4',
    krustazeoak: '5',
    arraina: '6',
    lupinuak: '7',
    fruituLehorrak: '8',
    kakahueteak: '9',
    sesamoa: '10',
    soja: '11',
    sulfitoak: '12',
    apioa: '13',
    ziapea: '14',
  };

  return dictionary[identifikadorea];
}
