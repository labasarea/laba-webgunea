import React from 'react';

import { Link } from 'gatsby';

import { BiziContent } from '../../domain/bizi/BiziContent';
import { EkintzaContent } from '../../domain/ekintza/EkintzaContent';
import { ZikloaContent } from '../../domain/zikloa/ZikloaContent';
import { EkintzaSnippetList } from '../components/EkintzaSnippetList/EkintzaSnippetList';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { Oina } from '../components/Oina';
import * as styles from './Bizi.module.scss';

interface Props {
  content: BiziContent;
  ekintzak: EkintzaContent[];
  zikloak: ZikloaContent[];
}

export const Bizi: React.FC<Props> = ({ content, ekintzak, zikloak }) => {
  const { izenburua, deskribapena } = content;

  const ekintzakToShow = ekintzak.filter(
    ekintza => new Date(ekintza.hitzordua) >= new Date(),
  );

  return (
    <Layout>
      <Hero izenburua={izenburua} deskribapena={deskribapena} atala="bizi" />

      <main className={styles.wrapper} id="edukia">
        <section className={styles.section}>
          <h2 className={styles.title}>ekintzak</h2>
          <EkintzaSnippetList ekintzak={ekintzakToShow} />
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>zikloak</h2>
          <ul>
            {zikloak.map(zikloa => (
              <li key={zikloa.slug}>
                <Link to={`/bizi/zikloak/${zikloa.slug}`}>{zikloa.izena}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Oina />
    </Layout>
  );
};
