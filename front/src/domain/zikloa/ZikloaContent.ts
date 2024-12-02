import { Markdown } from '../_valueObjects/Markdown';
import { EkintzaContent } from '../ekintza/EkintzaContent';

export interface ZikloaContent {
  slug: string;
  izena: string;
  deskribapena?: Markdown;
  ekintzak: EkintzaContent[];
}

export function getLastEkintza(zikloa: ZikloaContent) {
  return zikloa.ekintzak
    .sort((a, b) => (a.hitzordua > b.hitzordua ? 1 : -1))
    .slice(-1)[0].hitzordua;
}
