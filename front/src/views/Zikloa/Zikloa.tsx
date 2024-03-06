import React from 'react';
import ReactMarkdown from 'react-markdown';

import { ZikloaContent } from '../../domain/zikloa/ZikloaContent';
import { EkintzaSnippetList } from '../components/EkintzaSnippetList';
import { Gainburua } from '../components/Gainburua/Gainburua';
import { Layout } from '../components/Layout';
import { Oina } from '../components/Oina';
import * as styles from './Zikloa.module.scss';

interface Props {
  content: ZikloaContent;
}

export const Zikloa: React.FC<Props> = ({ content }) => {
  const { izena, ekintzak, deskribapena } = content;

  return (
    <Layout>
      <Gainburua atala="bizi" />

      <div className={styles.wrapper}>
        <h1 className={styles.izenburua}>{izena}</h1>

        {deskribapena && (
          <ReactMarkdown className={styles.deskribapena}>
            {deskribapena}
          </ReactMarkdown>
        )}

        <EkintzaSnippetList ekintzak={ekintzak} />
      </div>

      <Oina />
    </Layout>
  );
};
