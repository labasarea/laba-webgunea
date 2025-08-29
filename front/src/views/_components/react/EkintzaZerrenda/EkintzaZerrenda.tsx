import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { type EkintzaSnippet, getShortDate, getUrl } from "models/Ekintza";
import { getImageData, type ImageData } from "models/ImageMedia";
import styles from "./EkintzaZerrenda.module.scss";

interface Props {
  ekintzak: EkintzaSnippet[];
  title?: string;
  description?: string;
  isMainTitle?: boolean;
}

export const EkintzaZerrenda: React.FC<Props> = ({
  title,
  description,
  ekintzak,
  isMainTitle = false,
}) => {
  const [imageToShow, setImageToShow] = useState<ImageData>();
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { autoAlpha: 0, scale: 1.05 },
        { autoAlpha: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [imageToShow]);

  return (
    <div className={styles.wrapper}>
      <div aria-hidden className={styles.mainMediaWrapper}>
        {imageToShow && (
          <img
            ref={imgRef}
            className={styles.mainMedia}
            alt={imageToShow.alt}
            src={imageToShow.src}
            width={imageToShow.width}
            height={imageToShow.height}
          />
        )}
      </div>

      <div className={styles.agendaWrapper}>
        {title && (
          <>
            {isMainTitle ? (
              <h1 className={styles.izenburua}>{title}</h1>
            ) : (
              <h2 className={styles.izenburua}>{title}</h2>
            )}
          </>
        )}

        {description && <p className={styles.description}>{description}</p>}

        <ul className={styles.zerrenda}>
          {ekintzak.map((ekintza) => (
            <li
              key={ekintza.id}
              onMouseEnter={() => handleMouseEnter(ekintza)}
              onMouseLeave={handleMouseLeave}
            >
              <a className={styles.esteka} href={getUrl(ekintza)}>
                <span>{ekintza.izenburua}</span>
                <span>{getShortDate(ekintza)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  function handleMouseEnter(ekintza: EkintzaSnippet) {
    if (!ekintza.mainMedia) {
      return;
    }
    setImageToShow(getImageData(ekintza.mainMedia));
  }

  function handleMouseLeave() {
    if (!imgRef.current || !imageToShow) {
      setImageToShow(undefined);
      return;
    }

    const currentSrc = imageToShow.src;
    const el = imgRef.current;

    gsap.to(el, {
      autoAlpha: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setImageToShow((prev) => (prev?.src === currentSrc ? undefined : prev));
      },
    });
  }
};
