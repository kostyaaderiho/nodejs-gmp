import { Request, Response, NextFunction } from 'express';

import { loggerMessages } from '../utils';

export const logRequest =
    (endpoint: string) => (req: Request, res: Response, next: NextFunction) => {
        loggerMessages(req, endpoint, 'info');
        next();
    };
