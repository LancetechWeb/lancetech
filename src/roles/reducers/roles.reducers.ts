import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role, RoleStateType } from '../types/roles.types';

const initialState:RoleStateType = {
    roles: []
};

const roleSlice = createSlice({
  name: 'ROLE_SLICE',
  initialState,
  reducers: {
    setRoles: (state, action:PayloadAction<Role[]>) => {
      state.roles = action.payload;
    }
  },
});

export const { setRoles } = roleSlice.actions;
export const roleReducer = roleSlice.reducer;