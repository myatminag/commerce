"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Provider } from "react-redux";
import { appStore } from "../store/store";
import type { AppStore } from "../store/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>(undefined);

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
