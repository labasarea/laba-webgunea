interface Format {
  url: string;
  width: number;
  height: number;
}

export interface Irudia {
  alternativeText?: string;
  formats: {
    thumbnail: Format;
    small: Format;
    medium: Format;
    large: Format;
  };
}
