import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { User as UserModel } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { notFound } from './utils/user.utils';

export const post = async (req: Request, res: Response) => {
    const userService = new UserService(UserModel);

    try {
        const user = await userService.create(req.body);

        res.json(user);
    } catch (err) {
        res.send(err);
    }
};

export const get = async (req: Request, res: Response) => {
    const {
        loginSubstring,
        limit
    }: { loginSubstring?: string; limit?: number } = req.query;

    const userService = new UserService(UserModel);

    const query = loginSubstring
        ? {
            login: {
                [Op.like]: `%${loginSubstring}%`
            }
        }
        : {};

    try {
        const users = await userService.getList({
            where: query,
            limit,
            order: [['login', 'ASC']]
        });

        res.send(users);
    } catch (err) {
        res.send(err);
    }
};

export const getById = async (req: Request, res: Response) => {
    const userService = new UserService(UserModel);

    try {
        const user = await userService.get({
            where: {
                id: req.params.id
            }
        });
        res.send(user || notFound(req.params.id));
    } catch (err) {
        res.send(err);
    }
};

export const update = async (req: Request, res: Response) => {
    const userService = new UserService(UserModel);

    try {
        const result = await userService.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true
        });

        if (!result[1]) res.send(notFound(req.params.id));

        res.send(result[1][0]);
    } catch (err) {
        res.send(err);
    }
};

export const remove = async (req: Request, res: Response) => {
    const userService = new UserService(UserModel);

    try {
        const result = await userService.update(
            {
                ...req.body,
                deleted: true
            },
            {
                where: {
                    id: req.params.id
                },
                returning: true
            }
        );
        if (!result[1]) res.send(notFound(req.params.id));

        res.send(
            `The user with ${result[1][0].id} id has been softly deleted.`
        );
    } catch (err) {
        res.send(err);
    }
};
