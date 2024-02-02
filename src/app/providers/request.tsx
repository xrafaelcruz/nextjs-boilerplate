'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../libs/react-query';

const RequestProvider = ({ children }: React.PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default RequestProvider;
