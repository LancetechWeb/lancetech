import { NextFunction, Response, Request } from "express"
import { NotAuthorizedError } from "../../utils"

export const requireAuth =(req:Request, res: Response, next: NextFunction)=>{

    if(!req.currentUser){
        console.log("yooo no req.currentUser")

        throw new NotAuthorizedError("sign in required")
    }

    next()
}
