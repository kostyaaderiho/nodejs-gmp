import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import { getAutoSuggestUsers } from '../../routes/users/utils/users.utils';
import { notFound } from './utils/user.utils';
import { User } from '../../types/user';

let users: Array<User> = []; // In memory users.

export const post = (req: express.Request, res: express.Response) => {
    const user = {
        ...req.body,
        isDeleted: false,
        id: uuidv4(),
    };

    users.push(user);
    res.json(user);
};

export const get = (req: express.Request, res: express.Response) => {
    const {
        loginSubstring,
        limit,
    }: { loginSubstring?: string; limit?: number } = req.query;

    res.send(getAutoSuggestUsers(users, loginSubstring, limit));
};

export const getById = (req: express.Request, res: express.Response) => {
    res.send(
        users.find((user) => user.id === req.params.id) ||
            notFound(req.params.id)
    );
};

export const update = (req: express.Request, res: express.Response) => {
    let target: User | undefined = users.find(
        (user) => user.id === req.params.id
    );

    if (!target) {
        res.send(notFound(req.params.id));
        return;
    }

    target = {
        ...target,
        ...req.body,
    };

    users = users.map((user) =>
        target && user.id === target.id ? target : user
    );

    res.send(target);
};

export const remove = (req: express.Request, res: express.Response) => {
    let target: User | undefined = users.find(
        (user) => user.id === req.params.id
    );

    if (!target) {
        res.send(notFound(req.params.id));
        return;
    }

    target.isDeleted = true;

    res.send(`The user with ${target.id} has been softly deleted.`);
};
