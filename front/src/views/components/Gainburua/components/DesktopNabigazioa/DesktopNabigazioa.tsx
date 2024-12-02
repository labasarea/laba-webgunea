import React from 'react';

import { Link } from 'gatsby';

import { classNames } from '../../../../../utilities/classnames';
import * as styles from './DesktopNabigazioa.module.scss';

import type { AtalaName } from '../../../../../domain/AtalaName';
interface Props {
  atala?: AtalaName;
}

export const DesktopNabigazioa: React.FC<Props> = ({ atala }) => {
  return (
    <nav className={styles.nabigazioa}>
      <ul className={styles.estekaZerrenda}>
        <li>
          <Link
            className={styles.gainburuLink}
            to="/"
            activeClassName={styles.active}
          >
            Laba gara
          </Link>
        </li>

        <li>
          <Link
            className={styles.gainburuLink}
            to="/bizi"
            activeClassName={styles.active}
            partiallyActive
          >
            Bizi Laba
          </Link>
        </li>

        <li>
          <Link
            className={styles.gainburuLink}
            to="/kafetegia"
            activeClassName={styles.active}
            partiallyActive
          >
            Dastatu Laba
          </Link>
        </li>
      </ul>
    </nav>
  );
};
