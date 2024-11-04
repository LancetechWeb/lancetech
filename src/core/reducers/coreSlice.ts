import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoreStateType, User } from '../types/core.state.types';

const initialState:CoreStateType = {
  previousPage: '/',
  isAuthenticated:undefined,
  user:undefined
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
    setUser: (state, action:PayloadAction<User | undefined>) => {
      state.user = action.payload;
    },
    
  },
});

export const { setPreviousPage, setIsAuthenticated, setUser } = coreSlice.actions;
export const coreReducer = coreSlice.reducer;
