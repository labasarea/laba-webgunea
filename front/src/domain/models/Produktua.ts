import { Alergenoa } from './Alergenoa';

export interface Produktua {
  id: string;
  izena: string;
  prezioa: number;
  ekologikoa: boolean;
  beganoa: boolean;
  alergenoak: {
    [alergenoa in Alergenoa]: boolean;
  };
}
