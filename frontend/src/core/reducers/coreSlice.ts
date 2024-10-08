import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoreStateType } from '../types/core.state.types';

const initialState:CoreStateType = {
  previousPage: '/',
};

const Core = createSlice({
  name: 'CORE_SLICE',
  initialState,
  reducers: {
    notification(state, action) {},
    setPreviousPage: (state, action:PayloadAction<string>) => {
      state.previousPage = action.payload;
    },
  },
});

export const { setPreviousPage } = Core.actions;
export const coreReducer = Core.reducer;
