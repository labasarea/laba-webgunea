import React, { useState } from 'react';

import { Link } from 'gatsby';

import HamburgerIcon from '../../assets/hamburguer.svg';
import Itxi from '../../assets/itxi.svg';
import { KontaktuDatuak } from '../KontaktuDatuak';
import * as styles from './MugikorNabigazioa.module.scss';

export const MugikorNabigazioa: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className={styles.nabigazioaWrapper}>
          <div className={styles.openClose} onClick={() => setIsOpen(false)}>
            <Itxi />
          </div>

          <nav>
            <ul>
              <li className={styles.esteka}>
                <Link to="/">Laba gara</Link>
              </li>

              {
                // TODO testeatu eta produkzioan jarri
                process.env.NODE_ENV === 'development' && (
                  <li className={styles.esteka}>
                    <Link to="/bizi">Bizi Laba</Link>
                  </li>
                )
              }

              <li className={styles.esteka}>
                <Link to="/kafetegia">Dastatu Laba</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.kontaktuaWrapper}>
            <KontaktuDatuak kolorea="zuria" />
          </div>
        </div>
      )}

      <div
        className={styles.openClose}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <HamburgerIcon className={styles.hamburguer} />
      </div>
    </>
  );
};
