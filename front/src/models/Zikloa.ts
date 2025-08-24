import type { Ekintza } from "./Ekintza";

export interface Zikloa {
  id: string;
  slug: string;
  izena: string;
  deskribapena?: string;
  ekintzak: Pick<Ekintza, "izenburua" | "hitzordua" | "slug">[];
}
