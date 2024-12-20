import React from 'react';
import ReactMarkdown from 'react-markdown';

import Gezia from '../../assets/gezia.svg';
import { HasieraContent } from '../../domain/hasiera/HasieraContent';
import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { Oina } from '../components/Oina';
import * as styles from './Hasiera.module.scss';

interface Props {
  content: HasieraContent;
}

export const Hasiera: React.FC<Props> = ({ content }) => {
  const { izenburua, deskribapena, edukia } = content;
  return (
    <>
      <Hero atala="hasiera" izenburua={izenburua} deskribapena={deskribapena} />

      <div className={styles.contentWrapper} id="edukia">
        <Container>
          <ReactMarkdown className={styles.edukia}>{edukia}</ReactMarkdown>

          <div className={styles.izanLabaWrapper}>
            <a
              className={styles.callToAction}
              href="https://forms.gle/wV41CVkRX1JtHsAu9"
            >
              <Gezia className={styles.gezia} /> Labazkidetu.
            </a>
          </div>
        </Container>
      </div>

      <Oina />
    </>
  );
};
