import React from 'react';

import InstagramLogo from '../../assets/instagram.svg';
import TwitterLogo from '../../assets/twitter.svg';
import * as styles from './KontaktuDatuak.module.scss';

/**
 * ERREPIKATUA
 * KontaktuDatuak konponentea MugikorNabigazioan errepikatzen da, honek
 * logoaren fill-erako kokapenaren araberako CSS aldagaia erabiltzen duelako
 * TODO: Beste estrategia bat bilatu, abstrakzio bakarra izateko
 */

export const KontaktuDatuak: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <address className={styles.helbidea}>
        <p>Gazteluko plaza, 2</p>
        <p>Iruñea</p>
      </address>

      <ul className={styles.sareSozialak}>
        <li className={styles.sareSoziala}>
          <a
            className={styles.gainburuLink}
            tabIndex={0}
            aria-label="Laba Twitterren"
            href="https://twitter.com/labasarea/"
          >
            <TwitterLogo
              className={styles.sareSozialLogo}
              title="Laba Twitterren"
            />
          </a>
        </li>

        <li className={styles.sareSoziala}>
          <a
            className={styles.gainburuLink}
            tabIndex={0}
            aria-label="Laba Instagramen"
            href="https://www.instagram.com/labasarea/"
          >
            <InstagramLogo
              className={styles.sareSozialLogo}
              title="Laba Instagramen"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
