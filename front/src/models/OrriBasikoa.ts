import type { Markdown } from "./Markdown";
import type { ImageMedia } from "models/ImageMedia";

interface ParagraphIrudia {
  type: "ComponentParagraphIrudia";
  id: string;
  media: ImageMedia;
}

interface ParagraphTestua {
  type: "ComponentParagraphTestua";
  id: string;
  testua: Markdown;
}

export type Paragraph = ParagraphTestua | ParagraphIrudia;

export interface OrriBasikoa {
  id: string;
  izenburua: string;
  slug: string;
  deskribapena?: string;
  edukiLibrea: Paragraph[];
}
