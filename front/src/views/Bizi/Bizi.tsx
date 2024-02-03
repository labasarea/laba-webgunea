import React from 'react';

import { BiziContent } from '../../domain/bizi/BiziContent';
import { Gainburua } from '../components/Gainburua';
import { Layout } from '../components/Layout';
import { Oina } from '../components/Oina';

export const Bizi: React.FC<{ content: BiziContent }> = ({ content }) => {
  const { izenburua, deskribapena } = content;

  return (
    <Layout>
      <Gainburua
        izenburua={izenburua}
        deskribapena={deskribapena}
        atala="bizi"
      />

      <div id="edukia">
        <p>Hementxe sartuko ditugu ekintza eta zikloak.</p>
      </div>

      <Oina />
    </Layout>
  );
};
