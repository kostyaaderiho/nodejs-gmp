import { reverseString } from '../../homework-2/utils/formatters';

process.stdin.resume();
process.stdin.on('data', (buffer: Buffer) => {
    return process.stdout.write(`${reverseString(buffer.toString())}\n`);
});
