import { Response } from 'express';

import { entityQueryParamNotProvided } from './utils/entity.utils';
import { UserGroupService } from '../services/userGroup.service';
import { UserGroupModel } from '../models/userGroup.model';

export const addUsersToGroup = async (
    {
        query: { userIds, groupId },
    }: { query: { userIds?: string; groupId?: string } },
    res: Response
) => {
    if (!userIds || !groupId) {
        res.send(entityQueryParamNotProvided());
        return;
    }

    const userGroupService = new UserGroupService(UserGroupModel);

    try {
        const userGroup = await userGroupService.create({
            userId: userIds,
            groupId,
        });

        res.send(userGroup);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};
