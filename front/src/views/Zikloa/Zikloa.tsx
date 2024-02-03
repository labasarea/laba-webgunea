import React from 'react';

import { ZikloaContent } from '../../domain/zikloa/ZikloaContent';
import { Gainburua } from '../components/Gainburua';
import { Layout } from '../components/Layout';
import { Oina } from '../components/Oina';

interface Props {
  content: ZikloaContent;
}

export const Zikloa: React.FC<Props> = ({ content }) => {
  const { izena } = content;

  return (
    <Layout>
      <Gainburua izenburua={izena} />

      <h1>{izena}</h1>

      <Oina />
    </Layout>
  );
};
