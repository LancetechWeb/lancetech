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


export type RoleApplicationFormFields = {
    portfolioLinks: {id:string, url:string}[];
    resume?: Record<string, File>;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: string;
    state: string;
    city: string;
    legalWorkPermit: string;
    additionalDocuments?: Record<string, File>;
}; 