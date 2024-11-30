import { RootState } from "../../store";

export const selectRoles = (state:RootState) => state.roleReducer.roles;
export const selectRoleById = (state:RootState, id:string) => state.roleReducer.roles.find(role => role._id === id);
export const selectRoleToEdit = (state:RootState)=> state.roleReducer.roleToEdit;
export const selectEditedState = (state:RootState)=> state.roleReducer.management.editedState;
