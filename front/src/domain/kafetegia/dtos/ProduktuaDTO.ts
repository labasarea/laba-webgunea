import { AlergenoIdentifikadorea } from '../models/AlergenoIdentifikadorea';

export interface ProduktuaDTO {
  id: string;
  izena: string;
  prezioa: number;
  ekologikoa: boolean;
  beganoa: boolean;
  alergenoak: {
    [alergenoa in AlergenoIdentifikadorea]: boolean;
  };
}
