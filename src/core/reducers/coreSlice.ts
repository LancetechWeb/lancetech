import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  previousPage: '/',
};

const Core = createSlice({
  name: 'CORE_SLICE',
  initialState,
  reducers: {
    notification(state, action) {},
    setPreviousPage: (state, action) => {
      state.previousPage = action.payload;
    },
  },
});

export const { setPreviousPage } = Core.actions;
export const coreReducer = Core.reducer;
