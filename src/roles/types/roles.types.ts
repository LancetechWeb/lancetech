export interface Role{
    id:string;
    title:string;
    rank:string;
    remote:string;
    description:string;
    isActive?:boolean;
    createdAt: string;
    updatedAt: string;
}

export interface RoleStateType{
    roles:Role[]
}