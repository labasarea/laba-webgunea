import { Produktua } from '../domain/models/Produktua';

export interface KafetegiaData {
  deskribapena: string;
  izenburua: string;
  edariBeroak: Produktua[];
  infusioEkologikoak: Produktua[];
  edariHotzak: Produktua[];
  pikatzekoak: Produktua[];
  gozoak: Produktua[];
  anizkoJogurta: Produktua;
  tostadak: Produktua[];
}
