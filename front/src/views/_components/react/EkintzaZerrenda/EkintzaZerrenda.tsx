import React, { useState } from "react";

import { type EkintzaSnippet, getShortDate, getUrl } from "models/Ekintza";
import { getImageData, type ImageData } from "models/ImageMedia";
import styles from "./EkintzaZerrenda.module.scss";

interface Props {
  ekintzak: EkintzaSnippet[];
  title?: string;
  description?: string;
}

export const EkintzaZerrenda: React.FC<Props> = ({
  title,
  description,
  ekintzak,
}) => {
  const [imageToShow, setImageToShow] = useState<ImageData>();

  return (
    <div className={styles.wrapper}>
      <div aria-hidden className={styles.mainMediaWrapper}>
        {imageToShow && (
          <img
            className={styles.mainMedia}
            alt={imageToShow.alt}
            src={imageToShow.src}
            width={imageToShow.width}
            height={imageToShow.height}
          />
        )}
      </div>

      <div className={styles.agendaWrapper}>
        {title && <h2 className={styles.izenburua}>{title}</h2>}
        {description && <p>{description}</p>}
        <ul className={styles.zerrenda}>
          {ekintzak.map((ekintza) => (
            <li
              key={ekintza.id}
              onMouseEnter={() => {
                if (!ekintza.mainMedia) {
                  return;
                }
                setImageToShow(getImageData(ekintza.mainMedia));
              }}
              onMouseLeave={() => setImageToShow(undefined)}
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
};
