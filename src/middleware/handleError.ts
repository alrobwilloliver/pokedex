import { Request, Response, NextFunction } from 'express';
import { CustomValidationError } from '../errors/validation-error';

export const handleError = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomValidationError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() })
    }

    

    next()
}
