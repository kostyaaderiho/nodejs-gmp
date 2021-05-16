import { Request, Response, NextFunction } from 'express';

import { loggerMessages, logger } from '../utils';

export const logErrors = (
    err: string,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    logger.error('error', err);
    loggerMessages(req);
    next(err);
};
