import React from 'react';
import { datesUtils } from '../utils/dateUtils';
import { SFEguna } from '../pages/sanferminak';
import styled from 'styled-components';
import { rem } from 'polished';
import { font, fontWeight, size } from '../ui/theme';
import { graphql, useStaticQuery } from 'gatsby';

interface DataProps {
  allStrapiSfEkitaldia: {
    nodes: {
      id: string;
      hitzordua: string;
      izenburua: string;
    }[];
  };
}

export const SFEgunaEdukia: React.FC<{ sfeguna: SFEguna }> = ({ sfeguna }) => {
  const { eguna, ekitaldi_nagusia } = sfeguna;

  const {
    allStrapiSfEkitaldia: { nodes: egunak },
  } = useStaticQuery<DataProps>(graphql`
    {
      allStrapiSfEkitaldia {
        nodes {
          hitzordua
          id
          izenburua
        }
      }
    }
  `);

  const besteEgunak = egunak.filter(
    ekitaldia =>
      datesUtils.areSameDay(new Date(ekitaldia.hitzordua), new Date(eguna)) &&
      ekitaldi_nagusia.id !== ekitaldia.id,
  );

  return (
    <SFEgunWrapper>
      <SFEgunaEguna>Uztailak {new Date(eguna).getDate()}.</SFEgunaEguna>

      <SFEgunaNagusiaOrdua>
        {datesUtils.getHour(new Date(ekitaldi_nagusia.hitzordua))}
      </SFEgunaNagusiaOrdua>

      <SFEgunaNagusiaIzenburua>
        {ekitaldi_nagusia.izenburua}
      </SFEgunaNagusiaIzenburua>

      {besteEgunak.map(eguna => (
        <BesteHitzordua>
          {datesUtils.getHour(new Date(eguna.hitzordua))} {eguna.izenburua}
        </BesteHitzordua>
      ))}
    </SFEgunWrapper>
  );
};

const BesteHitzordua = styled.p`
  ${font.base()};
  font-weight: ${fontWeight.bold};

  margin-top: ${rem(size.base)};
`;

const SFEgunaEguna = styled.p`
  margin-bottom: ${rem(size.base)};

  ${font.large()};
`;

const SFEgunaNagusiaIzenburua = styled.h2`
  flex-grow: 1;

  ${font.large()};

  font-weight: ${fontWeight.bold};
  text-align: center;
`;

const SFEgunaNagusiaOrdua = styled.p`
  ${font.base()};

  font-weight: ${fontWeight.bold};
  text-align: center;
`;

const SFEgunWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
