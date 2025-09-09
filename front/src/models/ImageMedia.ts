interface Format {
  url: string;
  height: number;
  width: number;
}

interface FormatsObject {
  thumbnail: Format;
  small?: Format;
  medium?: Format;
  large?: Format;
}

export interface ImageMedia {
  alternativeText?: string;
  formats: FormatsObject;
}

export interface ImageData {
  alt: string;
  src: string;
  height: number;
  width: number;
}

export function getImageData(
  imageMedia: ImageMedia,
  options: { preferredFormat?: "thumbnail" | "small" | "medium" | "large" } = {
    preferredFormat: "small",
  }
): ImageData {
  if (imageMedia.formats.large && options.preferredFormat === "large") {
    return {
      alt: imageMedia.alternativeText ?? "",
      src: imageMedia.formats.large.url,
      width: imageMedia.formats.large.width,
      height: imageMedia.formats.large.height,
    };
  }

  if (
    imageMedia.formats.medium &&
    (options.preferredFormat === "large" || options.preferredFormat == "medium")
  ) {
    return {
      alt: imageMedia.alternativeText ?? "",
      src: imageMedia.formats.medium.url,
      width: imageMedia.formats.medium.width,
      height: imageMedia.formats.medium.height,
    };
  }

  if (imageMedia.formats.small) {
    return {
      alt: imageMedia.alternativeText ?? "",
      src: imageMedia.formats.small.url,
      width: imageMedia.formats.small.width,
      height: imageMedia.formats.small.height,
    };
  }

  return {
    alt: imageMedia.alternativeText ?? "",
    src: imageMedia.formats.thumbnail.url,
    width: imageMedia.formats.thumbnail.width,
    height: imageMedia.formats.thumbnail.height,
  };
}
