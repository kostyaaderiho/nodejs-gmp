import express, { json, urlencoded } from 'express';
import cors from 'cors';

import {
    userGroupRouter,
    userRouter,
    groupRouter,
    loginRouter,
} from '../routes';
import {
    userUrl,
    groupUrl,
    userGroupUrl,
    messages,
    loginUrl,
} from '../constants';
import { logErrors, errorHandler } from '../middlewares';
import { catchUncaughtException } from '../utils';

export const init = () => {
    const app = express();

    app.use(json());
    app.use(
        urlencoded({
            extended: true,
        })
    );
    app.use(cors());

    app.use(userUrl, userRouter);
    app.use(groupUrl, groupRouter);
    app.use(userGroupUrl, userGroupRouter);
    app.use(loginUrl, loginRouter);

    app.use((req, res, next) => {
        next({
            status: 404,
            message: messages['404'],
        });
    });
    app.use(logErrors);
    app.use(errorHandler);

    catchUncaughtException();

    return app;
};
