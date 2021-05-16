import { pipeline } from 'stream';
import csv from 'csvtojson';
import fs from 'fs';

import { logger } from '../../homework-2/utils/logger';

const INPUT_FILE_NAME: string = 'nodejs-hw1-ex1.csv';
const OUTPUT_FILE_NAME: string = 'output.txt';

const origin = fs.createReadStream(`./csv/${INPUT_FILE_NAME}`);
const destination = fs.createWriteStream(`${__dirname}/${OUTPUT_FILE_NAME}`);

origin.on('error', (err: Error) => logger.error(err));
destination.on('error', (err: Error) => logger.error(err));

pipeline(origin, csv(), destination, (err) => {
    if (err) {
        logger.error('Pipeline failed', err);
    } else {
        console.log('Pipeline succeeded.');
    }
});
