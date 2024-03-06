import { Markdown } from '../_valueObjects/Markdown';
import { EkintzaContent } from '../ekintza/EkintzaContent';

export interface ZikloaContent {
  slug: string;
  izena: string;
  deskribapena?: Markdown;
  ekintzak: EkintzaContent[];
}
