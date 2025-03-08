import { css } from '@emotion/react';

// 믹스인 정의
export const mixinFlex = (direction : "row" | "column") => css`
  display: flex;
  flex-direction: ${direction};
  align-items: center;
  justify-content: center;
  width: 100%;
`;