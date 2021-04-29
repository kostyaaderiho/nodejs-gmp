import { Request, Response } from 'express';

import { entityQueryParamNotProvided } from './utils/entity.utils';
import { UserGroupService } from '../services/userGroup.service';
import { UserGroupModel } from '../models/userGroup.model';

export const post = async (
    {
        body: { userids, groupid },
    }: { body: { userids: string; groupid: string } },
    res: Response
) => {
    if (!userids || !groupid) {
        res.send(entityQueryParamNotProvided());
        return;
    }

    const userGroupService = new UserGroupService(UserGroupModel);
    try {
        const usergroups = await userGroupService.create({
            userids: userids.split(','),
            groupid,
        });
        res.send(usergroups);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};

export const get = async (req: Request, res: Response) => {
    const userGroupService = new UserGroupService(UserGroupModel);

    try {
        const userGroups = await userGroupService.get();

        res.send(userGroups);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};
