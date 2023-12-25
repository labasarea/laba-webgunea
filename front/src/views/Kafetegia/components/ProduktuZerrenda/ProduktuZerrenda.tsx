import React from 'react';

import { rem } from 'polished';
import { styled } from 'styled-components';

import BeganoaLogo from '../../../../assets/beganoa.svg';
import EkologikoaLogo from '../../../../assets/ekologikoa.svg';
import { Produktua } from '../../../../domain/models/Produktua';
import { colors, font, fontWeight, media, size } from '../../../../ui/theme';

interface Props {
  produktuZerrenda: Produktua[];
  izena?: React.ReactNode;
}

export const ProduktuZerrenda: React.FC<Props> = ({
  produktuZerrenda,
  izena,
}) => (
  <ProduktuTaula>
    {izena && <ProduktuMota>{izena}</ProduktuMota>}

    <tbody>
      {produktuZerrenda.map(produktua => (
        <tr key={produktua.id}>
          <Ezaugarria>
            {produktua.beganoa && <BeganoaLogo title="Produktu beganoa" />}
          </Ezaugarria>
          <Ezaugarria>
            {produktua.ekologikoa && (
              <EkologikoaLogo title="Produktu ekologikoa" />
            )}
          </Ezaugarria>
          <Izena scope="row">
            {produktua.izena}{' '}
            {produktua.alergenoak.map(alergenoa => (
              <Alergenoa>{alergenoa.zenbakia}</Alergenoa>
            ))}
          </Izena>
          <Prezioa>
            {new Intl.NumberFormat('eu-ES', {
              style: 'currency',
              currency: 'EUR',
            }).format(produktua.prezioa)}
          </Prezioa>
        </tr>
      ))}
    </tbody>
  </ProduktuTaula>
);

const ProduktuTaula = styled.table`
  width: 100%;
  table-layout: fixed;
  overflow-wrap: break-word;
  border-collapse: separate;
  border-spacing: 0 ${size.tiny}px;

  ${media.tablet`
    border-spacing: 0 ${size.xtiny}px;
  `}
`;

const Ezaugarria = styled.td`
  width: ${size.base}px;
  height: ${size.base}px;
  padding: 0 ${size.xtiny}px;
  vertical-align: top;

  ${media.tablet`
    width: ${size.medium}px;
    height: ${size.medium}px;
  `}
`;

const Izena = styled.td`
  text-align: left;
  font-weight: ${fontWeight.regular};
  padding: 0 ${size.xtiny}px;
  vertical-align: top;
`;

const Prezioa = styled.td`
  width: ${size.huge}px;
  text-align: right;
  font-weight: ${fontWeight.regular};
  padding: 0 ${size.xtiny}px;
  vertical-align: top;
`;

const ProduktuMota = styled.caption`
  ${font.large()};
  text-align: left;
  padding-left: 52px;
  margin-bottom: ${rem(size.mini)};

  &::after {
    content: '.';
  }

  ${media.tablet`
    padding-left: 67px;
  `}
`;

const Alergenoa = styled.span`
  color: ${colors.morea};
  font-weight: ${fontWeight.bold};

  &:not(:last-child)::after {
    content: ', ';
  }
`;
