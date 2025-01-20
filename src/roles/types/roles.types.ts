import { InitialStateManagement } from "../../utils/state/types/state.types";

export interface Role{
    _id:string;
    id:string;
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

export const roleFormSteps = [
    {id:"resume", name:"Resume"}, 
    {id:"contactInformation", name:"Contact Information"}, 
    {id:"additionalDocuments", name:"Additional Documents"},
    {id:"legalInformation", name:"Legal Information"}
]

export type RoleApplicationFormFields = {
    portfolioLinks?: {id:string, url:string}[];
    resume: File[];
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: string;
    state: string;
    city: string;
    legalWorkPermit: string;
    additionalDocuments?: File[];
}; 

export interface RoleApplication extends RoleApplicationFormFields{
    id:string;
    roleId:string
}