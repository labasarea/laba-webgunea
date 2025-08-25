import React, { useEffect, useState } from "react";

import { type Ekintza, getShortDate, getUrl } from "models/Ekintza";
import styles from "./EkintzaZerrenda.module.scss";
import Image from "astro/components/Image.astro";

interface Props {
  ekintzak: Pick<
    Ekintza,
    "id" | "izenburua" | "hitzordua" | "slug" | "mainMedia"
  >[];
  title?: string;
  description?: string;
}

export const EkintzaZerrenda: React.FC<Props> = ({
  title,
  description,
  ekintzak,
}) => {
  const [focusedEkintza, setFocusedEkintza] =
    useState<
      Pick<Ekintza, "id" | "izenburua" | "hitzordua" | "slug" | "mainMedia">
    >();

  return (
    <div className={styles.wrapper}>
      <div aria-hidden className={styles.mainMediaWrapper}>
        {focusedEkintza && focusedEkintza.mainMedia.formats.small && (
          <img
            className={styles.mainMedia}
            alt={focusedEkintza.mainMedia.alternativeText ?? ""}
            src={`http://localhost:1337${focusedEkintza.mainMedia.formats.small?.url}`}
            width={focusedEkintza.mainMedia.formats.small.width}
            height={focusedEkintza.mainMedia.formats.small.height}
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
                console.log("Focus ekintza", ekintza);
                setFocusedEkintza(ekintza);
              }}
              onMouseLeave={() => setFocusedEkintza(undefined)}
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
