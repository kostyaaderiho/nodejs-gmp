import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, printf } = format;

// eslint-disable-next-line
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

export const logger = createLogger({
    format: combine(label({ label: 'Source:' }), timestamp(), myFormat),
    transports: [
        new transports.File({
            filename: 'info.log'
        })
    ]
});
