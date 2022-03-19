import React from 'react';

import { AlergenoIdentifikadorea } from '../../domain/models/AlergenoIdentifikadorea';
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
import styled from 'styled-components';
import { rem } from 'polished';
import { breakpoints, colors, fontWeight, media, size } from '../../ui/theme';
import { mapAlergenoIdentifikadoreaToIzena } from '../../domain/mappers/mapAlergenoIdentifikadoreaToIzena';
import { mapAlergenoIdentifikadoreaToZenbakia } from '../../domain/mappers/mapAlergenoIdentifikadoreaToZenbakia';
import { useMediaQuery } from 'react-responsive';

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
    <Wrapper>
      {alergenoakOrdenaturik.map(alergenoa => (
        <AlergenoWrapper>
          <LogoWrapper>
            <AlergenoLogoa alergenoId={alergenoa} />
          </LogoWrapper>

          <Izena>{mapAlergenoIdentifikadoreaToIzena(alergenoa)}</Izena>
          <Zenbakia>{mapAlergenoIdentifikadoreaToZenbakia(alergenoa)}</Zenbakia>
        </AlergenoWrapper>
      ))}
    </Wrapper>
  );
};

const Izena = styled.div`
  margin-bottom: ${rem(size.tiny)};
  font-weight: ${fontWeight.bold};
  text-align: center;
`;

const Zenbakia = styled.div`
  font-weight: ${fontWeight.bold};
  text-align: center;
  color: ${colors.morea};
`;

const AlergenoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-column-gap: ${rem(size.tiny)};
  grid-row-gap: ${rem(size.base)};

  grid-template-columns: repeat(3, 1fr);
  ${media.tablet`
    grid-template-columns: repeat(5, 1fr);
  `};
`;

const LogoWrapper = styled.div`
  margin-bottom: ${rem(size.mini)};
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const AlergenoLogoa: React.VFC<{ alergenoId: AlergenoIdentifikadorea }> = ({
  alergenoId,
}) => {
  const isAboveDesktop = useMediaQuery({ minWidth: breakpoints.desktop });
  const height = rem(isAboveDesktop ? size.huge : size.medium);

  const alergenoIdToLogo: { [id in AlergenoIdentifikadorea]: React.ReactNode } =
    {
      esnekiak: <Esnekiak height={height} />,
      arrautzak: <Arrautzak height={height} />,
      glutena: <Glutena height={height} />,
      moluskuak: <Moluskuak height={height} />,
      krustazeoak: <Krustazeoak height={height} />,
      arraina: <Arraina height={height} />,
      lupinuak: <Lupinuak height={height} />,
      fruituLehorrak: <FruituLehorrak height={height} />,
      kakahueteak: <Kakahueteak height={height} />,
      sesamoa: <Sesamoa height={height} />,
      soja: <Soja height={height} />,
      sulfitoak: <Sulfitoak height={height} />,
      apioa: <Apioa height={height} />,
      ziapea: <Ziapea height={height} />,
    };
  return <>{alergenoIdToLogo[alergenoId]}</>;
};
