'use client';

import type { ReactNode } from 'react';
import { useRef } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Provider } from 'react-redux';
import { appStore } from '../store/store';
import type { AppStore } from '../store/store';

const queryClient = new QueryClient();

const AppProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = appStore();
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={storeRef.current}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </Provider>
    </QueryClientProvider>
  );
};

export default AppProvider;
