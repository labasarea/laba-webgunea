import { ProduktuaDTO } from '../dtos/ProduktuaDTO';
import { mapAlergenoIdentifikadoreaToIzena } from '../mappers/mapAlergenoIdentifikadoreaToIzena';
import { mapAlergenoIdentifikadoreaToZenbakia } from '../mappers/mapAlergenoIdentifikadoreaToZenbakia';
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
