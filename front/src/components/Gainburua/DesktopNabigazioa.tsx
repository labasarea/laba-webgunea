import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { rem } from 'polished';
import { size } from '../../ui/theme';

export const DesktopNabigazioa: React.FC<{
  atala?: 'hasiera' | 'kafetegia';
}> = ({ atala }) => {
  return (
    <Nabigazioa>
      <EstekaZerrenda>
        <Esteka aktiboa={atala === 'hasiera'}>
          <Link to="/">Laba gara</Link>
        </Esteka>
        <Esteka aktiboa={atala === 'kafetegia'}>
          <Link to="/kafetegia">Dastatu Laba</Link>
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

  ${({ aktiboa }) =>
    aktiboa &&
    `
    border-bottom: 3px solid var(--color);
  `}
`;
