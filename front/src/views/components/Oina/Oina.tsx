import React from 'react';

import { Link } from 'gatsby';

import * as styles from './Oina.module.scss';

export const Oina: React.FC = () => (
  <footer className={styles.wrapper}>
    <Link className={styles.esteka} to="/lege-oharra">
      Lege oharra
    </Link>
    <Link className={styles.esteka} to="/pribatutasun-politika">
      Pribatutasun politika
    </Link>
  </footer>
);
