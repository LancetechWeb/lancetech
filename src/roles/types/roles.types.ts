import { InitialStateManagement } from "../../utils/state/types/state.types";

export interface Role{
    _id:string;
    title:string;
    rank:string;
    remote:string;
    description:string;
    isActive?:boolean;
    createdAt: string;
    updatedAt: string;
}

export type RoleState = Record<string, Role>

export interface RoleManagementState extends InitialStateManagement<Role, {}>{
    roleToEdit?:Role
}