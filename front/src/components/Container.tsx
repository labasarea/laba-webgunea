import { rem } from 'polished';
import styled from 'styled-components';
import { media } from '../ui/theme/media';
import { size } from '../ui/theme/size';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${rem(size.tiny)};
  padding-right: ${rem(size.tiny)};

  width: 100%;

  ${media.tablet`
    width: 744px;
  `}

  ${media.desktop`
    width: 1014px;
  `}
`;
