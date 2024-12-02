import React from 'react';

import { Link } from 'gatsby';

import * as styles from './DesktopNabigazioa.module.scss';

export const DesktopNabigazioa: React.FC = () => {
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

        {
          // TODO testeatu eta produkzioan jarri
          process.env.NODE_ENV === 'development' && (
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
          )
        }

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
