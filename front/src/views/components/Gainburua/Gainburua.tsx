import React from 'react';

import Gezia from '../../../assets/gezia.svg';
import { classNames } from '../../../utilities/classnames';
import Logo from './assets/logo.svg';
import { AtalaName } from './AtalaName';
import { DesktopNabigazioa } from './components/DesktopNabigazioa';
import { KontaktuDatuak } from './components/KontaktuDatuak';
import { MugikorNabigazioa } from './components/MugikorNabigazioa';
import * as styles from './Gainburua.module.scss';

interface Props {
  izenburua?: string;
  deskribapena?: string;
  atala?: AtalaName;
}

const atalaClassname: { [key in AtalaName]: string } = {
  hasiera: styles.hasiera,
  kafetegia: styles.kafetegia,
};

export const Gainburua: React.FC<Props> = ({
  izenburua,
  deskribapena,
  atala,
}) => {
  return (
    <div className={classNames(styles.wrapper, atala && atalaClassname[atala])}>
      <header className={styles.gainburuWrapper}>
        <a className={styles.gainburuLink} href="/">
          <div className={styles.logoWrapper}>
            <Logo className={styles.logo} title="Laba gara" />
          </div>
        </a>

        <div className={styles.kontaktuDatuakWrapper}>
          <KontaktuDatuak />
        </div>
      </header>

      {deskribapena && (
        <main className={styles.nagusia}>
          <p className={styles.deskribapena}>{deskribapena}</p>

          <div className={styles.izenburuWrapper}>
            <div className={styles.marra} />
            <h1 className={styles.izenburua}>{izenburua}</h1>
          </div>

          <div className={styles.geziaWrapper}>
            <a className={styles.gainburuLink} href="#edukia">
              JAITSI
              <Gezia className={styles.geziaLogo} />
            </a>
          </div>
        </main>
      )}

      <div className={styles.desktopNavigazioaWrapper}>
        <DesktopNabigazioa atala={atala} />
      </div>

      <div className={styles.mobileNabigazioaWrapper}>
        <MugikorNabigazioa />
      </div>
    </div>
  );
};
