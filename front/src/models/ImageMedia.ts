export interface ImageMedia {
  alternativeText?: string;
  formats: {
    thumbnail: {
      url: string;
      height: number;
      width: number;
    };
    small?: {
      url: string;
      height: number;
      width: number;
    };
  };
}

export interface ImageData {
  alt: string;
  src: string;
  height: number;
  width: number;
}

export function getImageData(imageMedia: ImageMedia): ImageData {
  if (imageMedia.formats.small) {
    return {
      alt: imageMedia.alternativeText ?? "",
      // react konponentean ingurune aldagaiak undefined ematen du
      // TODO STRAPI_URL ingurune aldagaia erabili
      src: `http://127.0.0.1:1337${imageMedia.formats.small.url}`,
      width: imageMedia.formats.small.width,
      height: imageMedia.formats.small.height,
    };
  }

  return {
    alt: imageMedia.alternativeText ?? "",
    src: `${import.meta.env.STRAPI_URL}${imageMedia.formats.thumbnail.url}`,
    width: imageMedia.formats.thumbnail.width,
    height: imageMedia.formats.thumbnail.height,
  };
}
