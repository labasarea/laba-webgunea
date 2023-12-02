import React from 'react';
import type { AtalaName } from './Gainburua';

import styles from './DesktopNabigazioa.module.scss';
import { classNames } from '../../utilities/classnames';

interface Props {
  atala?: AtalaName;
}

export const DesktopNabigazioa: React.FC<Props> = ({ atala }) => {
  return (
    <nav className={styles.nabigazioa}>
      <ul className={styles.estekaZerrenda}>
        <li
          className={classNames(
            styles.esteka,
            atala === 'hasiera' && styles.active,
          )}
        >
          <a className={styles.gainburuLink} href="/">
            Laba gara
          </a>
        </li>

        <li
          className={classNames(
            styles.esteka,
            atala === 'kafetegia' && styles.active,
          )}
        >
          <a className={styles.gainburuLink} href="/kafetegia">
            Dastatu Laba
          </a>
        </li>
      </ul>
    </nav>
  );
};
