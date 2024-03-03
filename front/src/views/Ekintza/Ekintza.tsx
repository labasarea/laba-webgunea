import React from 'react';
import ReactMarkdown from 'react-markdown';

import { EkintzaContent } from '../../domain/ekintza/EkintzaContent';
import { formatLargeDate } from '../../utilities/dateUtils';
import { Gainburua } from '../components/Gainburua/Gainburua';
import { Layout } from '../components/Layout';
import { Oina } from '../components/Oina';
import * as styles from './Ekintza.module.scss';

interface Props {
  content: EkintzaContent;
}

export const Ekintza: React.FC<Props> = ({ content }) => {
  const { izenburua, kartela, titularra, hitzordua, deskribapena } = content;

  return (
    <Layout>
      <Gainburua atala="bizi" />

      <div className={styles.wrapper}>
        <section className={styles.izenburuWrapper}>
          <p className={styles.hitzordua}>{formatLargeDate(hitzordua)}</p>
          <h1 className={styles.izenburua}>{izenburua}</h1>
          <p className={styles.titularra}>{titularra}</p>

          {deskribapena && (
            <ReactMarkdown className={styles.deskribapena}>
              {deskribapena}
            </ReactMarkdown>
          )}
        </section>

        {kartela && (
          <aside>
            <img
              className={styles.kartela}
              src={kartela.formats.medium.url}
              alt={kartela.alternativeText}
              height={kartela.formats.medium.height}
              width={kartela.formats.medium.width}
            ></img>
          </aside>
        )}
      </div>

      <Oina />
    </Layout>
  );
};
