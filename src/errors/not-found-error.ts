import { CustomError } from './custom-error'

export class NotFoundError extends CustomError {
    statusCode: number
    message: string
    constructor() {
        super()
        this.statusCode = 404
        this.message = 'Not Found'
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }
    serializeErrors() {
        return [{ message: this.message }]
    }
}
