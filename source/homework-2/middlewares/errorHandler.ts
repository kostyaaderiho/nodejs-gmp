import { NextFunction, Request, Response } from 'express';

import { messages } from '../constants';

export const errorHandler = (
    { status, message }: { status: number; message: string },
    req: Request,
    res: Response,
    // eslint-disable-next-line
    next: NextFunction
) => {
    res.status(status || 500).send({
        error: {
            status: status || 500,
            message: message || messages['500']
        }
    });
};
