import React from 'react';
import styles from './KontaktuDatuak.module.scss';
import InstagramLogo from './assets/instagram.svg';
import TwitterLogo from './assets/twitter.svg';

/**
 * ERREPIKATUA
 * KontaktuDatuak konponentea MugikorNabigazioan errepikatzen da, honek
 * logoaren fill-erako kokapenaren araberako CSS aldagaia erabiltzen duelako
 * TODO: Beste estrategia bat bilatu, abstrakzio bakarra izateko
 */

export const KontaktuDatuak: React.FC = () => {
  return (
    <div className={styles.kontaktua}>
      <address className={styles.helbidea}>
        <p>Gazteluko plaza, 2</p>
        <p>Iruñea</p>
      </address>

      <ul className={styles.sareSozialak}>
        <li className={styles.sareSoziala}>
          <a
            tabIndex={0}
            aria-label="Laba Twitterren"
            href="https://twitter.com/labasarea/"
          >
            <img
              src={TwitterLogo.src}
              height={TwitterLogo.height}
              width={TwitterLogo.width}
              title="Laba Twitterren"
              className={styles.twitter}
            />
          </a>
        </li>

        <li className={styles.sareSoziala}>
          <a
            tabIndex={0}
            aria-label="Laba Instagramen"
            href="https://www.instagram.com/labasarea/"
          >
            <img
              src={InstagramLogo.src}
              height={InstagramLogo.height}
              width={InstagramLogo.width}
              title="Laba Instagramen"
              className={styles.instagram}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
