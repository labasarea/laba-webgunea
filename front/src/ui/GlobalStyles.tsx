import { createGlobalStyle, css } from 'styled-components';

import { font, fontWeight } from './theme';
import { colors } from './theme/colors';

/**
 * Inicializa estilos base
 * 1. Change from `box-sizing: content-box` so that `width` is not affected
 *    by `padding` or `border`.
 * 2. As a best practice, apply a default 'background-color'.
 * 3. Set an explicit initial text-align value so that we can later use the the 'inherit'
 *    value on things like '<th>' elements.
 * 4. Prevent adjustments of font size after orientation changes in IE on
 *    Windows Phone and in iOS.
 * 5. Setting @viewport causes scrollbars to overlap content in IE11 and Edge,
 *    so we force a non-overlapping, non-auto-hiding scrollbar to counteract.
 * 6. Change the default tap highlight to be completely transparent in iOS.
 * 7. Implement full height to let children control own height.
 */
const reboot = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box; /* 1 */
  }
  html {
    -webkit-text-size-adjust: 100%; /* 4 */
    -ms-text-size-adjust: 100%; /* 4 */
    -ms-overflow-style: scrollbar; /* 5 */
    -webkit-tap-highlight-color: rgba(#000, 0); /* 6 */
    -webkit-tap-highlight-color: transparent;
  }
  body {
    min-height: 100vh;
  }
  -ms-viewport {
    width: device-width;
  }
  strong {
    font-weight: 700;
  }
`;

const reset = css`
  /* http://meyerweb.com/eric/tools/css/reset/
   v4.0 | 20180602
   License: none (public domain)
*/
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  u,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  em,
  i,
  b {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  *:focus,
  :active {
    outline: 0;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${reset};
  ${reboot};

  html {
    scroll-behavior: smooth;
  }

  body {
      font-family: 'Almarai', sans-serif;

      ${font.base()}
      font-weight: ${fontWeight.bold};

      color: ${colors.beltza};
  }
`;
