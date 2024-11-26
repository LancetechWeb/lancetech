import { RootState } from "../../store";

export const selectRoles = (state:RootState) => state.roleReducer.roles
export const selectRoleById = (state:RootState, id:string) => state.roleReducer.roles.find(role => role._id === id)