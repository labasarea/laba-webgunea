import React from 'react';

import { Link } from 'gatsby';

import { classNames } from '../../../../utilities/classnames';
import * as styles from './DesktopNabigazioa.module.scss';

import type { AtalaName } from '../../AtalaName';
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
          <Link className={styles.gainburuLink} to="/">
            Laba gara
          </Link>
        </li>

        <li
          className={classNames(
            styles.esteka,
            atala === 'kafetegia' && styles.active,
          )}
        >
          <Link className={styles.gainburuLink} to="/kafetegia">
            Dastatu Laba
          </Link>
        </li>
      </ul>
    </nav>
  );
};
