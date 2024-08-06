import { configureStore } from '@reduxjs/toolkit';

import viewTypeSlice from './features/view-type.slice';

export const appStore = () => {
  return configureStore({
    devTools: true,
    reducer: {
      viewType: viewTypeSlice,
    },
  });
};

export type AppStore = ReturnType<typeof appStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
