import { Irudia } from '../_valueObjects/Irudia';
import { Markdown } from '../_valueObjects/Markdown';

export interface EkintzaContent {
  slug: string;
  izenburua: string;
  titularra?: string;
  deskribapena?: Markdown;
  kartela?: Irudia;
}
