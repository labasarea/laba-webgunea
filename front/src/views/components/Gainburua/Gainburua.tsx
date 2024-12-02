import React from 'react';

import { AtalaName } from '../../../domain/AtalaName';
import Logo from './assets/logo.svg';
import { DesktopNabigazioa } from './components/DesktopNabigazioa';
import { KontaktuDatuak } from './components/KontaktuDatuak';
import { MugikorNabigazioa } from './components/MugikorNabigazioa';
import * as styles from './Gainburua.module.scss';

interface Props {
  atala?: AtalaName;
}

export const Gainburua: React.FC<Props> = ({ atala }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.gainburuWrapper}>
        <a className={styles.gainburuLink} href="/">
          <div className={styles.logoWrapper}>
            <Logo className={styles.logo} title="Laba gara" />
          </div>
        </a>

        <div className={styles.desktopNavigazioaWrapper}>
          <DesktopNabigazioa atala={atala} />
        </div>
        <div className={styles.mobileNabigazioaWrapper}>
          <MugikorNabigazioa />
        </div>

        <div className={styles.kontaktuDatuakWrapper}>
          <KontaktuDatuak />
        </div>
      </header>
    </div>
  );
};
