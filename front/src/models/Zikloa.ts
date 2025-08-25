import type { EkintzaSnippet } from "./Ekintza";

export interface Zikloa {
  id: string;
  slug: string;
  izena: string;
  deskribapena?: string;
  ekintzak: EkintzaSnippet[];
}

export function getUrl(zikloa: Pick<Zikloa, "slug">): string {
  return `/zikloak/${zikloa.slug}`;
}
