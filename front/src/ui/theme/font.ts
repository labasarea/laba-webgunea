import { css } from 'styled-components';
import { rem } from 'polished';

export const font = {
  tiny() {
    return css`
      font-size: ${rem(12.64)};
      line-height: ${rem(17)};
    `;
  },
  small() {
    return css`
      font-size: ${rem(16)};
      line-height: ${rem(22)};
    `;
  },
  base() {
    return css`
      font-size: ${rem(18)};
      line-height: ${rem(24)};
    `;
  },
  large() {
    return css`
      font-size: ${rem(25.63)};
      line-height: ${rem(35)};
    `;
  },
  huge() {
    return css`
      font-size: ${rem(36.41)};
      line-height: ${rem(50)};
    `;
  },
  gargantuan() {
    return css`
      font-size: ${rem(41.83)};
      line-height: ${rem(57)};
    `;
  },
};
