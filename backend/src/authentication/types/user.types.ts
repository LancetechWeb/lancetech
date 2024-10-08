import { Request } from 'express';
import { Session, SessionData,  } from 'express-session';
import { Types } from 'mongoose';


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

export type UserDTO = Omit <User, "password">
export interface UserSignUpDTO extends Pick<User, "email" | "password" | "firstName" | "lastName">{}
export interface UserSignInDTO extends Pick<User, "email" | "password" >{}
export interface UserUpdateDTO extends Partial<Omit<User, "id" | "createdAt" | "updatedAt">>{}

export interface SessionUser {
  id: string; 
  username: string
}

// export interface SessionData extends Session{
//   user: SessionUser;
//   jwt: string
// }

declare module 'express-session' {
  interface SessionData extends Session {
    user?: SessionUser;
    jwt?: string
  }
}


declare global{
  namespace Express{
      interface Request{
          currentUser?:SessionUser
      }
  }
}


