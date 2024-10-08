import { NextFunction, Response, Request } from "express"
import { SessionUser} from "../index"
import jwt from "jsonwebtoken"


export const currentUser =(req: Request, res: Response, next: NextFunction)=> {
    const {session } = req

    console.log("request sessionn in current user", req.session)

    if(!session?.jwt){ 
        console.log("... there's no session.jwt")
       return next()
    }

    try {
        const jwtSecret = process.env.JWT_SECRET
        console.log("verifying CurrentUserPayload")
        const verifyCurrentUserPayload = jwt.verify(session.jwt, jwtSecret) as SessionUser
        console.log("verifyCurrentUserPayload", verifyCurrentUserPayload)

        req.currentUser = verifyCurrentUserPayload

        next()
    
    } catch (error) {
        throw new Error(error)
    }

    console.log("... there's session.jwt", req.session)
}


export const Filler = ["house", "Christ"]
