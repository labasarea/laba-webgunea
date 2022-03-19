import { AlergenoIdentifikadorea } from './AlergenoIdentifikadorea';

export interface Produktua {
  id: string;
  izena: string;
  prezioa: number;
  ekologikoa: boolean;
  beganoa: boolean;
  alergenoak: {
    [alergenoa in AlergenoIdentifikadorea]: boolean;
  };
}
