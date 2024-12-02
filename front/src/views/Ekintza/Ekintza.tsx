import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Link } from 'gatsby';

import Gezia from '../../assets/gezia.svg';
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
  const { izenburua, kartela, titularra, hitzordua, deskribapena, zikloa } =
    content;

  return (
    <Layout>
      <Gainburua atala="bizi" />

      <div className={styles.wrapper}>
        <section className={styles.izenburuWrapper}>
          {zikloa && (
            <Link to={`/bizi/zikloak/${zikloa.slug}`} className={styles.zikloa}>
              {zikloa.izena}{' '}
              <Gezia aria-hidden={true} className={styles.gezia} />
            </Link>
          )}
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
              src={
                kartela.formats.medium
                  ? kartela.formats.medium.url
                  : kartela.formats.small.url
              }
              alt={kartela.alternativeText}
              height={
                kartela.formats.medium
                  ? kartela.formats.medium.height
                  : kartela.formats.small.height
              }
              width={
                kartela.formats.medium
                  ? kartela.formats.medium.width
                  : kartela.formats.small.width
              }
            ></img>
          </aside>
        )}
      </div>

      <Oina />
    </Layout>
  );
};
