import React from 'react';
import ReactMarkdown from 'react-markdown';

import 'dayjs/locale/eu';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { EkintzaContent } from '../../domain/ekintza/EkintzaContent';
import { Gainburua } from '../components/Gainburua';
import { Layout } from '../components/Layout';
import { Oina } from '../components/Oina';
import * as styles from './Ekintza.module.scss';

dayjs.extend(localizedFormat);
dayjs.locale('eu');

interface Props {
  content: EkintzaContent;
}

export const Ekintza: React.FC<Props> = ({ content }) => {
  const { izenburua, kartela, titularra, hitzordua, deskribapena } = content;

  return (
    <Layout>
      <Gainburua izenburua={izenburua} />

      <div className={styles.wrapper}>
        <section className={styles.izenburuWrapper}>
          <p className={styles.hitzordua}>
            {dayjs(hitzordua).format('LL, dddd, LT[etan]')}
          </p>
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
              src={kartela.formats.small.url}
              alt={kartela.alternativeText}
              height={kartela.formats.small.height}
              width={kartela.formats.small.width}
            ></img>
          </aside>
        )}
      </div>

      <Oina />
    </Layout>
  );
};
