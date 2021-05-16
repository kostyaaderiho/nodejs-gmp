import { Request, Response, NextFunction } from 'express';

import { logger } from '../utils/logger';

export const timing = (fn: Function) => {
    return async (...args: [Request, Response, NextFunction]) => {
        const time = new Date().getTime();

        const result = await fn.apply(this, args);

        logger.info(
            `${args[0].originalUrl} execution time: ${
                new Date().getTime() - time
            } ms`
        );

        return result;
    };
};
