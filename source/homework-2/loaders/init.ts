import express, { json } from 'express';

import { router as userGroupRouter } from '../routes/userGroup/userGroup.router';
import { router as userRouter } from '../routes/users/user.router';
import { router as groupRouter } from '../routes/group/group.router';

export const init = () => {
    const app = express();

    app.use(json());
    app.use('/api/users', userRouter);
    app.use('/api/groups', groupRouter);
    app.use('/api/addUsersToGroup', userGroupRouter);

    return app;
};
