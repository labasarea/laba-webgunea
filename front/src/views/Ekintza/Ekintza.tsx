import React from 'react';

import { EkintzaContent } from '../../domain/ekintza/EkintzaContent';
import { Gainburua } from '../components/Gainburua';
import { Layout } from '../components/Layout';
import { Oina } from '../components/Oina';

interface Props {
  content: EkintzaContent;
}

export const Ekintza: React.FC<Props> = ({ content }) => {
  const { izenburua } = content;

  return (
    <Layout>
      <Gainburua izenburua={izenburua} />

      <h1>{izenburua}</h1>

      <Oina />
    </Layout>
  );
};
