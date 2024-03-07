import { Irudia } from '../_valueObjects/Irudia';
import { Markdown } from '../_valueObjects/Markdown';
import { ZikloaContent } from '../zikloa/ZikloaContent';

export interface EkintzaContent {
  slug: string;
  izenburua: string;
  hitzordua: IsoDate;
  titularra?: string;
  deskribapena?: Markdown;
  kartela?: Irudia;
  zikloa?: Pick<ZikloaContent, 'izena' | 'slug'>;
}
