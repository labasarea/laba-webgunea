import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { size } from '../../ui/theme';
import { AtalaName } from './Gainburua';
import { GainburuLink } from './GainburuLink';

interface Props {
  atala?: AtalaName;
}

export const DesktopNabigazioa: React.FC<Props> = ({ atala }) => {
  return (
    <Nabigazioa>
      <EstekaZerrenda>
        <Esteka aktiboa={atala === 'hasiera'}>
          <GainburuLink to="/">Laba gara</GainburuLink>
        </Esteka>
        <Esteka aktiboa={atala === 'kafetegia'}>
          <GainburuLink to="/kafetegia">Dastatu Laba</GainburuLink>
        </Esteka>
      </EstekaZerrenda>
    </Nabigazioa>
  );
};

export const Nabigazioa = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: ${rem(size.tiny)};
`;

export const EstekaZerrenda = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

export const Esteka = styled.li<{ aktiboa?: boolean }>`
  padding: ${rem(size.small)};

  color: var(--color);

  ${({ aktiboa }) =>
    aktiboa
      ? css`
          border-bottom: 3px solid var(--color);
        `
      : css`
          transition: color 0.4s ease;

          &:hover {
            color: var(--hover-color);
          }
        `}
`;
