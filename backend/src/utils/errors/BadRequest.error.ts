import { CustomError } from "./index";


export class BadRequesError extends CustomError{
    statusCode = 400
    public message:string

    constructor(message:string){
        super(message);
        this.message = message
    }

    generateErrors():{message:string, field?:string}{
        return {message:this.message}
    }
}

