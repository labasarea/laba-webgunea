import type { ImageMedia } from "./ImageMedia";
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
  mainMedia: ImageMedia;
  zikloa: Pick<Zikloa, "izena" | "slug">;
}

export type EkintzaSnippet = Pick<
  Ekintza,
  "id" | "izenburua" | "hitzordua" | "slug" | "mainMedia"
>;

export function getShortDate(ekintza: Pick<Ekintza, "hitzordua">): string {
  const date = new Date(ekintza.hitzordua);
  const day = date.getDate();
  const month = date.toLocaleString("eu", { month: "short" });

  return `${month} ${day}`;
}

export function getUrl(ekintza: Pick<Ekintza, "slug">): string {
  return `/ekintzak/${ekintza.slug}`;
}
