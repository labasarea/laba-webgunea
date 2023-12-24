import React from 'react';

import { classNames } from '../../utilities/classnames';
import Gezia from './assets/gezia.svg';
import Logo from './assets/logo.svg';
import { DesktopNabigazioa } from './DesktopNabigazioa';
import * as styles from './Gainburua.module.scss';
import { KontaktuDatuak } from './KontaktuDatuak';
import { MugikorNabigazioa } from './MugikorNabigazioa';

export type AtalaName = 'hasiera' | 'kafetegia';

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
  atala = 'hasiera',
}) => {
  return (
    <div className={classNames(styles.wrapper, atalaClassname[atala])}>
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

      <div className={styles.desktopNavigazioaWrapper}>
        <DesktopNabigazioa atala={atala} />
      </div>

      <div className={styles.mobileNabigazioaWrapper}>
        <MugikorNabigazioa />
      </div>
    </div>
  );
};
