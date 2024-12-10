import { RootState } from "../../store";

export const selectRoles = (state:RootState) => Object.values(state.roleReducer.management.currentState);
export const selectRoleById = (state:RootState, id:string) => state.roleReducer.management.currentState[id]
export const selectRoleToEdit = (state:RootState)=> state.roleReducer.roleToEdit;
export const selectEditedState = (state:RootState)=> state.roleReducer.management.editedState;
