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

export function getShortDate(ekintza: Pick<Ekintza, "hitzordua">): string {
  const date = new Date(ekintza.hitzordua);
  const day = date.getDate();
  const month = date.toLocaleString("eu", { month: "short" });

  return `${month} ${day}`;
}
