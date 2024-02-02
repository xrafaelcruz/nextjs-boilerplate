'use client';

import RequestProvider from './request';
import StyledProvider from './styled';

const Providers = ({ children }: React.PropsWithChildren) => (
  <StyledProvider>
    <RequestProvider>{children}</RequestProvider>
  </StyledProvider>
);

export default Providers;
