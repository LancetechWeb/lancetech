export interface User{
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    rank:string;
    isActive?:boolean;
    createdAt: Date;
    updatedAt: Date;
    authorities: string[]
}
  

export interface CoreStateType{
    previousPage:string;
    isAuthenticated?:boolean;
    user?:User;
}
