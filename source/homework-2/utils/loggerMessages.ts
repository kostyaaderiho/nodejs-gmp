// @ts-nocheck
import { Request } from 'express';

import { logger } from './logger';

export const loggerMessages = (
    req: Request,
    endpoint?: string,
    severity = 'error'
) => {
    const { method, query, params, body, path } = req;

    logger[severity](`endpoint: "${endpoint || path}"`);
    logger[severity](`method: "${method}"`);
    logger[severity](`query: ${JSON.stringify(query)}`);
    logger[severity](`params: ${JSON.stringify(params)}`);
    logger[severity](`body: ${JSON.stringify(body)}`);
};
