'use client';

import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/app/libs/scRegistry';

import { GlobalStyles } from '@/app/styles/global';
import myTheme from '@/app/styles/theme';

const StyledProvider = ({ children }: React.PropsWithChildren) => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </StyledComponentsRegistry>
);

export default StyledProvider;
