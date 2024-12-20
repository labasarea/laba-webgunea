import React from 'react';
import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

import { RegularPageContent } from '../../domain/basicPage/RegularPageContent';
import { Container } from '../components/Container';
import { Gainburua } from '../components/Gainburua/Gainburua';
import { Oina } from '../components/Oina';
import * as styles from './RegularPage.module.scss';

interface Props {
  content: RegularPageContent;
}

export const RegularPage: React.FC<Props> = ({ content }) => {
  const { edukia } = content;

  return (
    <>
      <Gainburua />

      <Container>
        <section className={styles.atala}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} className={styles.edukia}>
            {edukia}
          </ReactMarkdown>
        </section>
      </Container>

      <Oina />
    </>
  );
};
