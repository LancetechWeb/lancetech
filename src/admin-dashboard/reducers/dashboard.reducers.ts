import { createSlice } from '@reduxjs/toolkit';
import { DashboardInitialState } from '../types/dashboard.types';

const initialState:DashboardInitialState = {
  openDashboardMenu: true,
};

const dashboardSlice = createSlice({
  name: 'DASHBOARD_SLICE',
  initialState,
  reducers: {
    setOpenDashboardMenu: (state, ) => {
      state.openDashboardMenu = !state.openDashboardMenu;
    },
  },
});

export const { setOpenDashboardMenu } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;
