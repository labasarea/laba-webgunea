import type { Markdown } from "./Markdown";

interface ParagraphTestua {
  id: string;
  testua: Markdown;
}

export interface OrriBasikoa {
  id: string;
  izenburua: string;
  slug: string;
  deskribapena?: string;
  edukiLibrea: ParagraphTestua[];
}
