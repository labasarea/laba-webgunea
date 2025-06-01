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
    height: number;
    width: number;
    formats: {
      large?: {
        url: string;
      };
      medium?: {
        url: string;
      };
    };
  };
}
