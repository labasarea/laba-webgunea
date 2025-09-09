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

interface ParagraphCallToAction {
  type: "ComponentParagraphCallToAction";
  id: string;
  url: string;
  label: string;
}

export type Paragraph =
  | ParagraphTestua
  | ParagraphIrudia
  | ParagraphCallToAction;

export interface OrriBasikoa {
  id: string;
  izenburua: string;
  slug: string;
  deskribapena?: string;
  edukiLibrea: Paragraph[];
}
