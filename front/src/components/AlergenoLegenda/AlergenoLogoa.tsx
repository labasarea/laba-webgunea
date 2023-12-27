import React from 'react';

import { AlergenoIdentifikadorea } from '../../domain/kafetegia/models/AlergenoIdentifikadorea';
import Apioa from './assets/alergenoak/apioa.svg';
import Arraina from './assets/alergenoak/arraina.svg';
import Arrautzak from './assets/alergenoak/arrautzak.svg';
import Esnekiak from './assets/alergenoak/esnekiak.svg';
import FruituLehorrak from './assets/alergenoak/fruituLehorrak.svg';
import Glutena from './assets/alergenoak/glutena.svg';
import Kakahueteak from './assets/alergenoak/kakahueteak.svg';
import Krustazeoak from './assets/alergenoak/krustazeoak.svg';
import Lupinuak from './assets/alergenoak/lupinuak.svg';
import Moluskuak from './assets/alergenoak/moluskuak.svg';
import Sesamoa from './assets/alergenoak/sesamoa.svg';
import Soja from './assets/alergenoak/soja.svg';
import Sulfitoak from './assets/alergenoak/sulfitoak.svg';
import Ziapea from './assets/alergenoak/ziapea.svg';

interface Props {
  alergenoId: AlergenoIdentifikadorea;
}

export const AlergenoLogoa: React.FC<Props> = ({ alergenoId }) => {
  const alergenoIdToLogo: {
    [id in AlergenoIdentifikadorea]: React.ReactNode;
  } = {
    esnekiak: <Esnekiak height="100%" />,
    arrautzak: <Arrautzak height="100%" />,
    glutena: <Glutena height="100%" />,
    moluskuak: <Moluskuak height="100%" />,
    krustazeoak: <Krustazeoak height="100%" />,
    arraina: <Arraina height="100%" />,
    lupinuak: <Lupinuak height="100%" />,
    fruituLehorrak: <FruituLehorrak height="100%" />,
    kakahueteak: <Kakahueteak height="100%" />,
    sesamoa: <Sesamoa height="100%" />,
    soja: <Soja height="100%" />,
    sulfitoak: <Sulfitoak height="100%" />,
    apioa: <Apioa height="100%" />,
    ziapea: <Ziapea height="100%" />,
  };
  return <>{alergenoIdToLogo[alergenoId]}</>;
};
