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
  const [activeEkintza, setActiveEkintza] = useState<EkintzaSnippet>();
  const [playInterval, setPlayInterval] = useState(true);

  const imageToShow = activeEkintza?.mainMedia
    ? getImageData(activeEkintza.mainMedia)
    : undefined;
  const imgRef = useRef<HTMLImageElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!playInterval) {
        return;
      }

      setActiveEkintza(ekintzak[Math.floor(Math.random() * ekintzak.length)]);
    }, 1800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playInterval]);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { autoAlpha: 0, scale: 1.05 },
        { autoAlpha: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeEkintza]);

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
              <a
                className={`${styles.esteka} ${activeEkintza?.id === ekintza.id && styles.active}`}
                href={getUrl(ekintza)}
              >
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
    setPlayInterval(false);
    setActiveEkintza(ekintza);
  }

  function handleMouseLeave() {
    setPlayInterval(true);
  }
};
