import express, { json } from 'express';
import { router as userRouter } from './routes/users/users.router';

const server = express();
const PORT = 3000;

server.use(json());
server.use('/api/users', userRouter);

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} port.`);
});
