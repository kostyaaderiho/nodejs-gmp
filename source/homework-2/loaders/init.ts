import express, { json } from 'express';

import { router as userGroupRouter } from '../routes/userGroup/userGroup.router';
import { router as userRouter } from '../routes/users/user.router';
import { router as groupRouter } from '../routes/group/group.router';
import { userUrl, groupUrl, userGroupUrl, messages } from '../constants';
import { logErrors, errorHandler } from '../middlewares';
import { catchUncaughtException } from '../utils';

export const init = () => {
    const app = express();

    app.use(json());
    app.use(userUrl, userRouter);
    app.use(groupUrl, groupRouter);
    app.use(userGroupUrl, userGroupRouter);

    app.use((req, res, next) => {
        next({
            status: 404,
            message: messages['404']
        });
    });
    app.use(logErrors);
    app.use(errorHandler);

    catchUncaughtException();

    return app;
};
