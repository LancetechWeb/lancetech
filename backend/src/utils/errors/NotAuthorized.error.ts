import { ErrorMessages } from "../types/error.types";
import { CustomError } from "./index";

export class NotAuthorizedError extends CustomError{
    statusCode = 401;
    public message:string

    constructor(message?:string){
        const newMessage = message ?? ErrorMessages.NOT_AUTHORIZED

        super(newMessage);
        
        this.message = newMessage
    }

    generateErrors():{message:string; field?:string}{
        return {message:this.message}
    }
}