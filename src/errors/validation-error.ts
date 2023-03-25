import { ValidationError } from 'express-validator'
import { CustomError } from './custom-error'

export class CustomValidationError extends CustomError {
    errors: ValidationError[]
    statusCode: number
    constructor(errors: ValidationError[]) {
        super();
        this.errors = errors;
        this.statusCode = 400;
        Object.setPrototypeOf(this, CustomValidationError.prototype)
    }

    serializeErrors(): { message: string; param?: string }[] {
        return this.errors.map(err => {
            return { message: err.msg, param: err.param }
        })
    }
}
