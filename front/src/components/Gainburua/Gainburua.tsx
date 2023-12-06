import React from 'react';

import LabaLogo from './assets/logo.svg';

import Gezia from './assets/gezia.svg';

import styles from './Gainburua.module.scss';
import { DesktopNabigazioa } from './DesktopNabigazioa';
import { KontaktuDatuak } from './KontaktuDatuak';

export type AtalaName = 'hasiera' | 'kafetegia' | 'sanferminak';

interface Props {
  izenburua?: string;
  deskribapena?: string;
  atala?: AtalaName;
}

export const Gainburua: React.FC<Props> = ({
  izenburua,
  deskribapena,
  atala,
}) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.gainburuWrapper}>
        <a className={styles.gainburuLink} href="/">
          <div className={styles.logoWrapper}>
            <img
              className={styles.logo}
              src={LabaLogo.src}
              title="Laba gara"
              height={LabaLogo.height}
              width={LabaLogo.width}
            />
          </div>
        </a>

        <KontaktuDatuak />
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
              <img
                src={Gezia.src}
                width={Gezia.width}
                height={Gezia.height}
                className={styles.geziaLogo}
              />
            </a>
          </div>
        </main>
      )}

      <DesktopNabigazioa atala={atala} />
    </div>
  );
};
