import express, { json } from 'express';

import { router as userRouter } from '../routes/users/users.router';

export const init = () => {
    const app = express();

    app.use(json());
    app.use('/api/users', userRouter);

    return app;
};
