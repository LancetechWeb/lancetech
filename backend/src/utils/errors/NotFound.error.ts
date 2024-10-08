
import { ErrorMessages } from "../types/error.types";
import { CustomError } from "./CustomError.error"

export class NotFoundError extends CustomError{
    statusCode = 404;
    public message:string

    constructor(message?:string){
        const newMessage = message ?? ErrorMessages.NOT_FOUND

        super(newMessage);
        
        this.message = newMessage
    }

    generateErrors():{message:string, field?:string}{
        return {message:this.message}
    }
}