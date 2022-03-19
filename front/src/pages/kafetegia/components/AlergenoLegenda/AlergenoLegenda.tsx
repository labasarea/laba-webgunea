import React from 'react';

import { AlergenoIdentifikadorea } from '../../../../domain/models/AlergenoIdentifikadorea';
import Esnekiak from './assets/alergenoak/esnekiak.svg';
import Arrautzak from './assets/alergenoak/arrautzak.svg';
import Glutena from './assets/alergenoak/glutena.svg';
import Moluskuak from './assets/alergenoak/moluskuak.svg';
import Krustazeoak from './assets/alergenoak/krustazeoak.svg';
import Arraina from './assets/alergenoak/arraina.svg';
import Lupinuak from './assets/alergenoak/lupinuak.svg';
import FruituLehorrak from './assets/alergenoak/fruituLehorrak.svg';
import Kakahueteak from './assets/alergenoak/kakahueteak.svg';
import Sesamoa from './assets/alergenoak/sesamoa.svg';
import Soja from './assets/alergenoak/soja.svg';
import Sulfitoak from './assets/alergenoak/sulfitoak.svg';
import Apioa from './assets/alergenoak/apioa.svg';
import Ziapea from './assets/alergenoak/ziapea.svg';

const alergenoakOrdenaturik: AlergenoIdentifikadorea[] = [
  'esnekiak',
  'arrautzak',
  'glutena',
  'moluskuak',
  'krustazeoak',
  'arraina',
  'lupinuak',
  'fruituLehorrak',
  'kakahueteak',
  'sesamoa',
  'soja',
  'sulfitoak',
  'apioa',
  'ziapea',
];

export const AlergenoLegenda: React.VFC = () => {
  return (
    <>
      {alergenoakOrdenaturik.map(alergenoa => (
        <AlergenoLogoa alergenoId={alergenoa} />
      ))}
    </>
  );
};

const alergenoIdToLogo: { [id in AlergenoIdentifikadorea]: React.ReactNode } = {
  esnekiak: <Esnekiak />,
  arrautzak: <Arrautzak />,
  glutena: <Glutena />,
  moluskuak: <Moluskuak />,
  krustazeoak: <Krustazeoak />,
  arraina: <Arraina />,
  lupinuak: <Lupinuak />,
  fruituLehorrak: <FruituLehorrak />,
  kakahueteak: <Kakahueteak />,
  sesamoa: <Sesamoa />,
  soja: <Soja />,
  sulfitoak: <Sulfitoak />,
  apioa: <Apioa />,
  ziapea: <Ziapea />,
};

const AlergenoLogoa: React.VFC<{ alergenoId: AlergenoIdentifikadorea }> = ({
  alergenoId,
}) => <>{alergenoIdToLogo[alergenoId]}</>;
