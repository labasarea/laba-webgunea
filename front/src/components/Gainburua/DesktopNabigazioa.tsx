import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { size } from '../../ui/theme';
import { AtalaName } from './Gainburua';

interface Props {
  atala?: AtalaName;
}

export const DesktopNabigazioa: React.FC<Props> = ({ atala }) => {
  return (
    <Nabigazioa>
      <EstekaZerrenda>
        <Esteka aktiboa={atala === 'hasiera'}>
          <Link to="/">Laba gara</Link>
        </Esteka>
        <Esteka aktiboa={atala === 'sanferminak'}>
          <Link to="/sanferminak">Sanferminak</Link>
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
