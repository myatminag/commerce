import { createSlice } from '@reduxjs/toolkit';

interface ViewTypeState {
  view: 'rows' | 'cards';
}

const initialState: ViewTypeState = {
  view: 'rows',
};

export const viewTypeSlice = createSlice({
  name: 'viewType',
  initialState,
  reducers: {
    toggleViewType: (state) => {
      state.view = state.view === 'rows' ? 'cards' : 'rows';
    },
  },
});

export const { toggleViewType } = viewTypeSlice.actions;

export default viewTypeSlice.reducer;
