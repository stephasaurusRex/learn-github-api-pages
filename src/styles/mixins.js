import { css } from "styled-components";

export const breakpoints = {
  xs: 320,
  sm: 480,
  md: 980,
  lg: 1280,
  xl: 1680,
  xxl: 1920,
};

/**
 * media query strings for the breakpoints
 * allows us to write them as: ${media.lg`background: red`}
 */
export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => (css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `);

  return acc;
}, {});

/* max width of full width components */

export const maxWidth = css`
  max-width: 75rem;

  ${media.lg`
    max-width: 90%;
  `}
`;
