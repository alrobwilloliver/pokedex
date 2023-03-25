export abstract class CustomError {
    abstract statusCode: number;
    constructor() {
        Object.setPrototypeOf(this, CustomError.prototype);
    }
    abstract serializeErrors(): { message: string; param?: string }[];
}
