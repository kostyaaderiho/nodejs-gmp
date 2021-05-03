import { ModelCtor, Model } from 'sequelize';

import { sequelize } from '../data-access/connection';

export class UserGroupService {
    model;

    constructor(model: ModelCtor<Model>) {
        this.model = model;
    }

    async create({ userids, groupId }: { userids: string[]; groupId: string }) {
        try {
            const usergroups: Model[] = [];

            await sequelize.transaction(async (t) => {
                for (let i = 0; i < userids.length; i++) {
                    const usergroup = await this.model.create(
                        {
                            userId: userids[i].trim(),
                            groupId
                        },
                        { transaction: t }
                    );

                    usergroups.push(usergroup);
                }
            });

            return usergroups;
        } catch (error) {
            return error;
        }
    }

    get() {
        return this.model.findAll();
    }
}
