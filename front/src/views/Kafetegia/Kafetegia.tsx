import React from 'react';

import { produktuaFactory } from '../../domain/kafetegia/factories/produktuaFactory';
import { KafetegiaContent } from '../../domain/kafetegia/KafetegiaContent';
import { Container } from '../components/Container';
import { Gainburua } from '../components/Gainburua';
import { Oina } from '../components/Oina';
import { AlergenoLegenda } from './components/AlergenoLegenda';
import { ProduktuZerrenda } from './components/ProduktuZerrenda';
import * as styles from './Kafetegia.module.scss';

export const Kafetegia: React.FC<{ content: KafetegiaContent }> = ({
  content,
}) => {
  const { izenburua, deskribapena, menua } = content;

  // oraingoz menuak alergenorik ez duenez, ezkutatuko dugu
  // TODO modu dinamikoan aldatu balio hau
  const hasAlergenoak = false;

  return (
    <>
      <Gainburua
        atala="kafetegia"
        izenburua={izenburua}
        deskribapena={deskribapena}
      />

      <div className={styles.contentWrapper} id="edukia">
        <Container>
          {menua.map(konponentea => {
            if (
              konponentea.konponentea ===
              'StrapiComponentKafetegiaProduktuTaldea'
            ) {
              return (
                <div className={styles.zerrendaWrapper} key={konponentea.id}>
                  <ProduktuZerrenda
                    izena={konponentea.izenburua}
                    produktuZerrenda={konponentea.produktuak.map(
                      produktuaFactory,
                    )}
                  />
                </div>
              );
            }

            if (
              konponentea.konponentea === 'StrapiComponentKafetegiaIzenburua'
            ) {
              return (
                <div className={styles.izenburuWrapper} key={konponentea.id}>
                  <div className={styles.marra} />
                  <h1 className={styles.izenburua}>
                    {konponentea.izenburuBalioa}
                  </h1>
                </div>
              );
            }
          })}

          {hasAlergenoak && (
            <section className={styles.taldeWrapper}>
              <div className={styles.izenburuWrapper}>
                <div className={styles.marra} />
                <h1 className={styles.izenburua}>Alergenoak</h1>
              </div>

              <AlergenoLegenda />
            </section>
          )}

          <p className={styles.onEgin}>On egin!</p>
        </Container>
      </div>

      <Oina />
    </>
  );
};
