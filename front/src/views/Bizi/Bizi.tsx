import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Link } from 'gatsby';

import { BiziContent } from '../../domain/bizi/BiziContent';
import { EkintzaContent } from '../../domain/ekintza/EkintzaContent';
import { ZikloaContent } from '../../domain/zikloa/ZikloaContent';
import { formatAbbreviatedDay } from '../../utilities/dateUtils';
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
          <ul className={styles.zikloaCardList}>
            {zikloak.map(zikloa => (
              <li className={styles.card} key={zikloa.slug}>
                <p className={styles.cardHitzordua}>
                  {formatAbbreviatedDay(
                    zikloa.ekintzak
                      .sort((a, b) => (a.hitzordua > b.hitzordua ? 1 : -1))
                      .slice(-1)[0].hitzordua,
                  )}{' '}
                  arte
                </p>

                <Link
                  className={styles.cardLink}
                  to={`/bizi/zikloak/${zikloa.slug}`}
                >
                  {zikloa.izena}
                </Link>

                {zikloa.deskribapena && (
                  <ReactMarkdown className={styles.deskribapena}>
                    {zikloa.deskribapena}
                  </ReactMarkdown>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Oina />
    </Layout>
  );
};
