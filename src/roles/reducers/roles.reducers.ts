import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role, RoleManagementState } from '../types/roles.types';
import { initEditableState } from '../../utils/state/helpers/state.helpers';

const initialState:RoleManagementState = {
  roleToEdit: undefined,
  management: initEditableState<Role, {}>({}),
  loading: false
};

const roleSlice = createSlice({
  name: 'ROLE_SLICE',
  initialState,
  reducers: {
    setCurrentState:(state, action:PayloadAction<Record<string, Role>>) =>{
      state.management.currentState = action.payload
    },
    addToCurrentState:(state, action:PayloadAction<Record<string, Role>>) =>{
      state.management.currentState = {...state.management.currentState, ...action.payload}
    },
    setEditedState:(state, action:PayloadAction<{id:string, field:Partial<Role>}>) =>{
      const{id, field} = action.payload;
      state.management.editedState[id] = {...state.management.editedState[id], ...field};
    },
    clearEditedState:(state) =>{
      state.management.editedState = {};
    },
    setRoleToEdit: (state, action:PayloadAction<Role|undefined>) => {
      state.roleToEdit = action.payload;
    },
  },
});

export const { setRoleToEdit, setCurrentState, addToCurrentState, setEditedState, clearEditedState } = roleSlice.actions;
export const roleReducer = roleSlice.reducer;