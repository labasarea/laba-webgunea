import type { Zikloa } from "./Zikloa";

export interface Ekintza {
  id: string;
  slug: string;
  izenburua: string;
  titularra: string;
  deskribapena: string;
  hitzordua: string;
  sarrera: {
    label: string;
    deskribapena: string;
  };
  mainMedia: {
    alternativeText?: string;
    formats: {
      small?: {
        url: string;
        height: number;
        width: number;
      };
    };
  };
  zikloa: Pick<Zikloa, "izena" | "slug">;
}

export function getShortDate(ekintza: Pick<Ekintza, "hitzordua">): string {
  const date = new Date(ekintza.hitzordua);
  const day = date.getDate();
  const month = date.toLocaleString("eu", { month: "short" });

  return `${month} ${day}`;
}

export function getUrl(ekintza: Pick<Ekintza, "slug">): string {
  return `/ekintzak/${ekintza.slug}`;
}
