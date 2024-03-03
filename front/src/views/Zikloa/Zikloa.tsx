import React from 'react';

import { ZikloaContent } from '../../domain/zikloa/ZikloaContent';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { Oina } from '../components/Oina';

interface Props {
  content: ZikloaContent;
}

export const Zikloa: React.FC<Props> = ({ content }) => {
  const { izena } = content;

  return (
    <Layout>
      <Hero izenburua={izena} />

      <h1>{izena}</h1>

      <Oina />
    </Layout>
  );
};
