'use client';

import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.base.dark};
    font-size: 36px;
  `}
`;
