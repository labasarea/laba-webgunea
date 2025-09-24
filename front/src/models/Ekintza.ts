import type { Erakundea } from "./Erakundea";
import type { ImageMedia } from "./ImageMedia";
import type { Zikloa } from "./Zikloa";
import dayjs from "dayjs";
import "dayjs/locale/eu";

export interface Elkarlana {
  label: string;
  erakundeak?: Erakundea[];
}

export interface Sarrera {
  label: string;
  deskribapena?: string;
  url?: string;
}

export interface Ekintza {
  id: string;
  slug: string;
  createdAt: string;
  izenburua: string;
  titularra: string;
  deskribapena: string;
  hitzordua: string;
  elkarlana?: Elkarlana;
  sarrera: Sarrera;
  mainMedia: ImageMedia;
  zikloa: Pick<Zikloa, "izena" | "slug">;
}

export type EkintzaSnippet = Pick<
  Ekintza,
  "id" | "izenburua" | "hitzordua" | "slug" | "mainMedia"
>;

export function getShortDate(ekintza: Pick<Ekintza, "hitzordua">): string {
  const date = new Date(ekintza.hitzordua);
  return dayjs(date).locale("eu").format("MMM D");
}

export function getUrl(ekintza: Pick<Ekintza, "slug">): string {
  return `/ekintzak/${ekintza.slug}`;
}
