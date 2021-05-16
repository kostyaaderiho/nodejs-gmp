import { Request, Response, NextFunction } from 'express';

import { messages } from '../constants/messages.constant';

export const errorHandler = (
    { status, message }: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(status || 500).send({
        error: {
            status: status || 500,
            message: message || messages['500'].internalError,
        },
    });
};
