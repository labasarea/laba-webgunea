import React from 'react';

import { Link } from 'gatsby';

import Gezia from '../../../assets/gezia.svg';
import * as styles from './Oina.module.scss';

export const Oina: React.FC = () => (
  <>
    <div className={styles.igoWrapper}>
      <a className={styles.oinaLink} href="#top">
        <Gezia className={styles.geziaLogo} />
        IGO
      </a>
    </div>

    <footer className={styles.wrapper}>
      <Link className={styles.esteka} to="/lege-oharra">
        Lege oharra
      </Link>
      <Link className={styles.esteka} to="/pribatutasun-politika">
        Pribatutasun politika
      </Link>
    </footer>
  </>
);
