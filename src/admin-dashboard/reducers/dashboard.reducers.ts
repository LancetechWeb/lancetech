import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardInitialState } from '../types/dashboard.types';
import { Role } from '../../roles/types/roles.types';

const initialState:DashboardInitialState = {
  openDashboardMenu: true,
  editRole:undefined
};

const dashboardSlice = createSlice({
  name: 'DASHBOARD_SLICE',
  initialState,
  reducers: {
    setOpenDashboardMenu: (state, ) => {
      state.openDashboardMenu = !state.openDashboardMenu;
    },
    setEditRole: (state, action:PayloadAction<Role|undefined>) => {
      state.editRole = action.payload;
    },
  },
});

export const { setOpenDashboardMenu, setEditRole } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;
