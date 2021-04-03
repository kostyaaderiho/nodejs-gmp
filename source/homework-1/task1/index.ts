import { reverseString } from '../../utils/formatters';

process.stdin.resume();
process.stdin.on('data', (buffer: Buffer) => {
    return process.stdout.write(reverseString(buffer.toString()) + '\n');
});
