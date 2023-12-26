import React from 'react';
import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

import { Container } from '../../components/Container';
import { Gainburua } from '../../components/Gainburua';
import { Oina } from '../../components/Oina';
import * as styles from './RegularPage.module.scss';
import { RegularPageContent } from './RegularPageContent';

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
