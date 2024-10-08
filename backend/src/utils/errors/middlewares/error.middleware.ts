import { NextFunction, Response, Request } from "express"
import { CustomError } from "../../index"
import { handleHttpStatus } from "../../../core"

export const errorHandler =(err:Error, req:Request, res: Response, next: NextFunction)=>{
    if(err instanceof CustomError){
      console.log("error in errorHandler", err.statusCode)
      console.log("errorMessage in errorHandler", err.message)
      return   handleHttpStatus(res, err.statusCode, err.generateErrors())
    }


   return  handleHttpStatus(res, 500)
}