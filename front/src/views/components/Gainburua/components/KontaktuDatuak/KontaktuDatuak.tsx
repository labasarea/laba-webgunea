import React from 'react';

import InstagramLogo from '../../../../../assets/instagram.svg';
import TwitterLogo from '../../../../../assets/twitter.svg';
import { classNames } from '../../../../../utilities/classnames';
import * as styles from './KontaktuDatuak.module.scss';

interface Props {
  kolorea?: KontaktuaColor;
}

type KontaktuaColor = 'theme' | 'zuria';
type ColorToStyleDictionary = {
  [color in KontaktuaColor]: string;
};

const colorToLogoStyle: ColorToStyleDictionary = {
  theme: styles.themeLogo,
  zuria: styles.zuriLogo,
};

const colorToBorderStyle: ColorToStyleDictionary = {
  theme: styles.themeBorder,
  zuria: styles.zuriBorder,
};

const colorToLinkStyle: ColorToStyleDictionary = {
  theme: styles.themeLink,
  zuria: styles.zuriLink,
};

export const KontaktuDatuak: React.FC<Props> = ({ kolorea = 'theme' }) => {
  return (
    <div className={styles.wrapper}>
      <address
        className={classNames(styles.helbidea, colorToBorderStyle[kolorea])}
      >
        <p>Gazteluko plaza, 2</p>
        <p>Iruñea</p>
      </address>

      <ul className={styles.sareSozialak}>
        <li className={styles.sareSoziala}>
          <a
            className={colorToLinkStyle[kolorea]}
            tabIndex={0}
            aria-label="Laba Twitterren"
            href="https://twitter.com/labasarea/"
          >
            <TwitterLogo
              className={classNames(
                styles.sareSozialLogo,
                colorToLogoStyle[kolorea],
              )}
              title="Laba Twitterren"
            />
          </a>
        </li>

        <li className={styles.sareSoziala}>
          <a
            className={colorToLinkStyle[kolorea]}
            tabIndex={0}
            aria-label="Laba Instagramen"
            href="https://www.instagram.com/labasarea/"
          >
            <InstagramLogo
              className={classNames(
                styles.sareSozialLogo,
                colorToLogoStyle[kolorea],
              )}
              title="Laba Instagramen"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
