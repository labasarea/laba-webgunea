import React from 'react';
import ReactMarkdown from 'react-markdown';

import dayjs from 'dayjs';
import { Link } from 'gatsby';

import { BiziContent } from '../../domain/bizi/BiziContent';
import { EkintzaContent } from '../../domain/ekintza/EkintzaContent';
import { ZikloaContent } from '../../domain/zikloa/ZikloaContent';
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
          <ul className={styles.ekintzaCardList}>
            {ekintzakToShow.map(ekintza => (
              <li className={styles.card} key={ekintza.slug}>
                <div className={styles.ekintzaInformation}>
                  <Link
                    to={`/bizi/ekintzak/${ekintza.slug}`}
                    className={styles.cardLink}
                  >
                    {ekintza.izenburua}
                  </Link>

                  {ekintza.titularra && (
                    <ReactMarkdown className={styles.cardHeadline}>
                      {ekintza.titularra}
                    </ReactMarkdown>
                  )}

                  <p className={styles.cardHitzordua}>
                    {dayjs(ekintza.hitzordua).format('MMM D, dddd, LT[etan]')}
                  </p>
                </div>

                {ekintza.kartela && (
                  <img
                    className={styles.kartela}
                    src={ekintza.kartela.formats.small.url}
                    alt={ekintza.kartela.alternativeText}
                    height={ekintza.kartela.formats.small.height}
                    width={ekintza.kartela.formats.small.width}
                  ></img>
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
