import { Request, Response } from 'express';

import { entityQueryParamNotProvided } from './utils/entity.utils';
import { UserGroupService } from '../services/userGroup.service';
import { UserGroupModel } from '../models/userGroup.model';

export const post = async (
    {
        body: { userids, groupId }
    }: { body: { userids: string; groupId: string } },
    res: Response
) => {
    if (!userids || !groupId) {
        res.send(entityQueryParamNotProvided());
        return;
    }

    const userGroupService = new UserGroupService(UserGroupModel);
    const usergroups = await userGroupService.create({
        userids: userids.split(','),
        groupId
    });

    res.send(usergroups);
};

export const get = async (req: Request, res: Response) => {
    const userGroupService = new UserGroupService(UserGroupModel);
    const userGroups = await userGroupService.get();

    res.send(userGroups);
};
