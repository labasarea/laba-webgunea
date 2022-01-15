import { css } from 'styled-components';
import { breakpoints } from './breakpoints';

export const media = {
  tablet: (styles: TemplateStringsArray, ...args) => css`
    @media (min-width: ${breakpoints.tablet}px) {
      ${css(styles, ...args)};
    }
  `,
  desktop: (styles: TemplateStringsArray, ...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${css(styles, ...args)};
    }
  `,
};
