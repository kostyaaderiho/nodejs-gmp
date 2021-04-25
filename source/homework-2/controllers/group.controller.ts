import { Request, Response } from 'express';

import { GroupService } from '../services/group.service';
import { GroupModel } from '../models/group.model';
import { entityNotFound, entityDeleted } from './utils/entity.utils';

export const post = async ({ body }: Request, res: Response) => {
    const groupService = new GroupService(GroupModel);

    try {
        const group = await groupService.create(body);

        res.json(group);
    } catch (err) {
        res.send(err);
    }
};

export const getById = async ({ params }: Request, res: Response) => {
    const groupService = new GroupService(GroupModel);

    try {
        const group = await groupService.getById({
            where: {
                id: params.id,
            },
        });

        res.send(group || entityNotFound(params.id));
    } catch (err) {
        res.send(err);
    }
};

export const get = async (req: Request, res: Response) => {
    const groupService = new GroupService(GroupModel);

    try {
        const group = await groupService.get();

        res.send(group);
    } catch (err) {
        res.send(err);
    }
};

export const put = async ({ body, params }: Request, res: Response) => {
    const groupService = new GroupService(GroupModel);

    try {
        const result = await groupService.update(body, {
            where: {
                id: params.id,
            },
            returning: true,
        });

        if (!result[1]) res.send(entityNotFound(params.id));

        res.send(result[1][0]);
    } catch (err) {
        res.send(err);
    }
};

export const remove = async ({ params: { id } }: Request, res: Response) => {
    const groupService = new GroupService(GroupModel);

    try {
        const result = await groupService.remove(id);

        if (!result) {
            res.send(entityNotFound(id));
            return;
        }

        res.send(entityDeleted(id, false));
    } catch (err) {
        res.json(err);
    }
};