import { ProduktuaDTO } from '../dtos/ProduktuaDTO';
import { Alergenoa } from '../models/Alergenoa';
import { AlergenoIdentifikadorea } from '../models/AlergenoIdentifikadorea';
import { Produktua } from '../models/Produktua';

export function produktuaFactory(dto: ProduktuaDTO): Produktua {
  return {
    ...dto,
    alergenoak: mapAlergenoDTOToAlergenoZerrenda(dto.alergenoak),
  };
}

function mapAlergenoDTOToAlergenoZerrenda(dto: {
  [alergenoa in AlergenoIdentifikadorea]: boolean;
}): Alergenoa[] {
  const alergenoIdentifikadoreak: AlergenoIdentifikadorea[] = Object.keys(
    dto,
  ) as AlergenoIdentifikadorea[];

  return alergenoIdentifikadoreak
    .filter(identifikadorea => dto[identifikadorea])
    .map<Alergenoa>(identifikadorea => ({
      id: identifikadorea,
      izena: mapAlergenoIdentifikadoreaToIzena(identifikadorea),
      zenbakia: mapAlergenoIdentifikadoreaToZenbakia(identifikadorea),
    }));
}

function mapAlergenoIdentifikadoreaToIzena(
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

function mapAlergenoIdentifikadoreaToZenbakia(
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
