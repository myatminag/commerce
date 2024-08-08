import { configureStore } from '@reduxjs/toolkit';

import expandableReducer from './features/expandable.slice';

export const appStore = () => {
  return configureStore({
    devTools: true,
    reducer: {
      expandable: expandableReducer,
    },
  });
};

export type AppStore = ReturnType<typeof appStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
