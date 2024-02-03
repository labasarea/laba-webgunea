import React from 'react';

import { Link } from 'gatsby';

import { BiziContent } from '../../domain/bizi/BiziContent';
import { useAllEkintzaContent } from '../../domain/ekintza/hooks/useAllEkintzaContent';
import { useAllZikloaContent } from '../../domain/zikloa/hooks/useAllZikloaContent';
import { Container } from '../components/Container';
import { Gainburua } from '../components/Gainburua';
import { Layout } from '../components/Layout';
import { Oina } from '../components/Oina';

export const Bizi: React.FC<{ content: BiziContent }> = ({ content }) => {
  const { izenburua, deskribapena } = content;

  const ekintzak = useAllEkintzaContent();
  const zikloak = useAllZikloaContent();

  return (
    <Layout>
      <Gainburua
        izenburua={izenburua}
        deskribapena={deskribapena}
        atala="bizi"
      />

      <Container id="edukia">
        <h2>Ekintzak</h2>
        <ul style={{ marginBottom: 24 }}>
          {ekintzak.map(ekintza => (
            <li>
              <Link to={`/bizi/ekintzak/${ekintza.slug}`}>
                {ekintza.izenburua}
              </Link>
            </li>
          ))}
        </ul>

        <h2>Zikloak</h2>
        <ul>
          {zikloak.map(zikloa => (
            <li>
              <Link to={`/bizi/ekintzak/${zikloa.slug}`}>{zikloa.izena}</Link>
            </li>
          ))}
        </ul>
      </Container>

      <Oina />
    </Layout>
  );
};
