import { Link } from 'gatsby';
import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { colors, size } from '../ui/theme';

export const Oina: React.VFC = () => (
  <Wrapper>
    <Esteka to="/lege-oharra">Lege oharra</Esteka>
    <Esteka to="/pribatutasun-politika">Pribatutasun politika</Esteka>
  </Wrapper>
);

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: ${rem(size.base)};
`;

const Esteka = styled(Link)`
  &:not(:last-child) {
    margin-right: ${rem(size.mini)};
  }

  transition: color 500ms ease-out 100ms;
  &:hover {
    color: ${colors.morea};
  }

  &:focus {
    outline: 2px solid ${colors.morea};
  }
`;
