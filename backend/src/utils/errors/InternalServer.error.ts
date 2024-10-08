import { CustomError } from "./index";
import { ErrorMessages } from "../types/error.types";


export class InternalServerError extends CustomError{
    statusCode = 500
    public message:string

    constructor(message?:string){
        const newMessage = message ?? ErrorMessages.INTERNAL_SERVER_ERROR

        super(newMessage);
        
        this.message = newMessage
    }

    generateErrors():{message:string, field?:string}{
        return {message:this.message}
    }
}

