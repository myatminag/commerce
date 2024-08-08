import { createSlice } from '@reduxjs/toolkit';

interface ExpandableState {
  isExpandable: boolean;
}

const initialState: ExpandableState = {
  isExpandable: false,
};

export const expandableSlice = createSlice({
  name: 'expandable',
  initialState,
  reducers: {
    toggleExpandable: (state) => {
      state.isExpandable = !state.isExpandable;
    },
  },
});

export const { toggleExpandable } = expandableSlice.actions;

export default expandableSlice.reducer;
