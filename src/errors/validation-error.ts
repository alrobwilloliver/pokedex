import { ValidationError } from 'express-validator'

export class CustomValidationError extends Error {
    errors: ValidationError[]
    statusCode: number
    constructor(code: number, errors: ValidationError[]) {
        super();
        this.errors = errors
        this.statusCode = code
    }

    serializeErrors(): { message: string; param?: string }[] {
        return this.errors.map(err => {
            return { message: err.msg, param: err.param }
        })
    }
}
