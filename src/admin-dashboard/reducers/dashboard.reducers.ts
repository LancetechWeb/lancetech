import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
