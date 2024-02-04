import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Link } from 'gatsby';

import { BiziContent } from '../../domain/bizi/BiziContent';
import { useAllEkintzaContent } from '../../domain/ekintza/hooks/useAllEkintzaContent';
import { useAllZikloaContent } from '../../domain/zikloa/hooks/useAllZikloaContent';
import { Gainburua } from '../components/Gainburua';
import { Layout } from '../components/Layout';
import { Oina } from '../components/Oina';
import * as styles from './Bizi.module.scss';

export const Bizi: React.FC<{ content: BiziContent }> = ({ content }) => {
  const { izenburua, deskribapena } = content;

  const ekintzak = useAllEkintzaContent();
  const zikloak = useAllZikloaContent();

  return (
    <Layout>
      <Gainburua
        izenburua={izenburua}
        deskribapena={deskribapena}
        atala="bizi"
      />

      <main className={styles.wrapper} id="edukia">
        <section className={styles.section}>
          <h2 className={styles.title}>ekintzak</h2>
          <ul className={styles.ekintzaCardList}>
            {ekintzak.map(ekintza => (
              <li className={styles.card} key={ekintza.slug}>
                <h3 className={styles.cardTitle}>
                  <Link
                    to={`/bizi/ekintzak/${ekintza.slug}`}
                    className={styles.cardLink}
                  >
                    {ekintza.izenburua}
                  </Link>
                </h3>

                {ekintza.titularra && (
                  <ReactMarkdown className={styles.cardHeadline}>
                    {ekintza.titularra}
                  </ReactMarkdown>
                )}
              </li>
            ))}
          </ul>
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
