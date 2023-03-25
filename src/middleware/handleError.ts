import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const handleError = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() })
    }

    next()
}
