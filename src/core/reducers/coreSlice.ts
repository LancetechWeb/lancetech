import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoreStateType } from '../types/core.state.types';

const initialState:CoreStateType = {
  previousPage: '/',
  isAuthenticated:undefined
};

const coreSlice = createSlice({
  name: 'CORE_SLICE',
  initialState,
  reducers: {
    notification(state, action) {},
    setPreviousPage: (state, action:PayloadAction<string>) => {
      state.previousPage = action.payload;
    },
    setIsAuthenticated: (state, action:PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setPreviousPage, setIsAuthenticated } = coreSlice.actions;
export const coreReducer = coreSlice.reducer;
