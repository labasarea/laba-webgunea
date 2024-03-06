import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Link } from 'gatsby';

import { EkintzaContent } from '../../../domain/ekintza/EkintzaContent';
import { formatAbbreviatedDate } from '../../../utilities/dateUtils';
import * as styles from './EkintzaSnippetList.module.scss';

interface Props {
  ekintzak: EkintzaContent[];
}

export const EkintzaSnippetList: React.FC<Props> = ({ ekintzak }) => {
  return (
    <ul className={styles.ekintzaCardList}>
      {ekintzak.map(ekintza => (
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
              {formatAbbreviatedDate(ekintza.hitzordua)}
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
  );
};
