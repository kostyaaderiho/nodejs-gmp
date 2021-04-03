import express from 'express';
import { router as userRouter } from './routes/users/users.router';

const server = express();
const PORT = 3000;

server.use(express.json());
server.use('/api/users', userRouter);

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} port.`);
});
