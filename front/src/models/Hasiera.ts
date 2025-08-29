import type { ImageMedia } from "./ImageMedia";
import type { Markdown } from "./Markdown";

export type ExternalSVG = string;

export interface Partehartzea {
  ikonoa: ExternalSVG;
  izenburua: string;
  deskribapena: string;
  email: string;
}

export interface Hasiera {
  id: number;
  izenburua: string;
  izanLabazkide: {
    izenburua: string;
    deskribapena: Markdown;
    url: {
      label: string;
      url: string;
    };
  };
  parteHartu: {
    izenburua: string;
    deskribapena?: Markdown;
    parteHartzea: Partehartzea[];
  };
  mosaikoa: ImageMedia[];
}
