import { logger } from '../utils';

export const catchUncaughtException = () => {
    process.on('uncaughtException', (err) => {
        logger.error(`Uncaught exception thrown: ${err}`);
        process.exit(1);
    });
};
