import { rem } from 'polished';
import styled from 'styled-components';
import { media } from '../ui/theme/media';
import { size } from '../ui/theme/size';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${rem(size.base)};
  padding-right: ${rem(size.base)};

  width: 100%;

  ${media.tablet`
    padding-left: 0;
    padding-right: 0;
    width: 744px;
  `}

  ${media.desktop`
    padding-left: 0;
    padding-right: 0;
    width: 1014px;
  `}
`;
