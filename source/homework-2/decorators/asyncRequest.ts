import { Request, Response, NextFunction } from 'express';

export const asyncRequest =
    (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
        return Promise.resolve(fn(req, res, next)).catch(next);
    };
