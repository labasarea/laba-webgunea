import { Link } from 'gatsby';
import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { size } from '../ui/theme';

export const Oina: React.VFC = () => (
  <Wrapper>
    <Link to="/lege-oharra">Lege-oharra</Link>
  </Wrapper>
);

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: ${rem(size.base)};
`;
