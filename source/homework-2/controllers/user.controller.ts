import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { entityNotFound, entityDeleted } from './utils/entity.utils';

export const post = async ({ body }: Request, res: Response) => {
    const userService = new UserService(UserModel);

    try {
        const user = await userService.create(body);

        res.json(user);
    } catch (err) {
        res.send(err);
    }
};

export const getById = async ({ params }: Request, res: Response) => {
    const userService = new UserService(UserModel);

    try {
        const user = await userService.getById({
            where: {
                id: params.id,
            },
        });
        res.send(user || entityNotFound(params.id));
    } catch (err) {
        res.send(err);
    }
};

export const get = async (
    {
        query: { loginSubstring, limit },
    }: { query: { loginSubstring?: string; limit?: number } },
    res: Response
) => {
    const userService = new UserService(UserModel);

    const query = loginSubstring
        ? {
              login: {
                  [Op.like]: `%${loginSubstring}%`,
              },
          }
        : {};

    try {
        const users = await userService.get({
            where: query,
            limit,
            order: [['login', 'ASC']],
        });

        res.send(users);
    } catch (err) {
        res.send(err);
    }
};

export const update = async ({ body, params }: Request, res: Response) => {
    const userService = new UserService(UserModel);

    try {
        const result = await userService.update(body, {
            where: {
                id: params.id,
            },
            returning: true,
        });

        if (!result[1].length) res.send(entityNotFound(params.id));

        res.send(result[1][0]);
    } catch (err) {
        res.send(err);
    }
};

export const remove = async ({ body, params }: Request, res: Response) => {
    const userService = new UserService(UserModel);

    try {
        const result = await userService.update(
            {
                ...body,
                deleted: true,
            },
            {
                where: {
                    id: params.id,
                },
                returning: true,
            }
        );

        if (!result[1].length) {
            res.send(entityNotFound(params.id));
            return;
        }

        res.send(entityDeleted(params.id));
    } catch (err) {
        res.send(err);
    }
};
