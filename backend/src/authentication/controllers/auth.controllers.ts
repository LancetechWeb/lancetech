import { NextFunction, Request, Response, } from 'express';
import { AuthModel, UserSignInDTO, UserSignUpDTO, type SessionUser} from '../index';
import jwt from 'jsonwebtoken';
import { getUserResponseDTO } from '../index';
import { handleHttpStatus } from '../../core';
import { BadRequesError } from '../../utils';



class Authentication {
   async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;
      const { email, password, firstName, lastName } = body;
      if (!email || !password || !firstName || !lastName ){ 
        console.error("incomplete details")

        throw new BadRequesError("all fields required")
      } 

      console.log("in signUp controller")

      const userObject:UserSignUpDTO = {email, password, firstName, lastName}

      const newUser = await AuthModel.signUp(userObject);

      // convert to UserDTO
      const userDTO = getUserResponseDTO(newUser)

      handleHttpStatus(res, 200, userDTO)
    } catch (error) {
      next(error)
    }
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;
      const { email, password } = body;
      if (!email || !password){ 
        console.error("email and password required")

        throw new BadRequesError("email and password required")
      } 

      const userObject:UserSignInDTO = {email, password}

      const {user} = await AuthModel.signIn(userObject);

      // token logic
      const payload:SessionUser = {username:user.email, id:user.id}
      const jwtSecret = process.env.JWT_SECRET
      const token = jwt.sign(payload, jwtSecret, {expiresIn:"2h"})

      // req.session.jwt = token
      // req.user = payload

      req.session.jwt = token


      // convert to UserDTO to remove password
      const userDTO = getUserResponseDTO(user)

      console.log("req session after sign in", req.session)  

      // handleHttpStatus(res, 200, userDTO)

      res.status(200).send({ message: 'OK', ...userDTO })
    } catch (error) {
      next(error);
    }
  }

  async signOut(req: Request, res: Response, next: NextFunction) {
    console.log("req.session before destroyed", req.session)

    // req.session = null

    req.session.destroy((err) => {
      if (err) {
         return handleHttpStatus(res, 500, {message:'Failed to destroy session'})

      }
      res.clearCookie('mySessionName'); // Clear the session cookie
      console.log("req.session after clearCookie", req.session)

      handleHttpStatus(res, 200, {message:'Session destroyed successfully'});

      console.log("req.session after destroyed", req.session)

    });
  }

  checkAuth(req: Request, res: Response, next: NextFunction){
     handleHttpStatus(res, 200, req.currentUser)
  }
}

const AuthController = new Authentication();
export default AuthController;
