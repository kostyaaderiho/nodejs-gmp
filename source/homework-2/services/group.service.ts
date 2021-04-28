import { v4 as uuid } from 'uuid';
import { ModelCtor, Model, UpdateOptions, FindOptions } from 'sequelize';

import { sequelize } from '../data-access/connection';
import { TGroup, Service } from '../interfaces';

export class GroupService implements Service {
    model;

    constructor(model: ModelCtor<Model>) {
        this.model = model;
    }

    create(group: TGroup) {
        return this.model.create({
            ...group,
        });
    }

    getById(params: FindOptions) {
        return this.model.findOne(params);
    }

    get(params?: FindOptions) {
        return this.model.findAll(params);
    }

    update(group: TGroup, params: UpdateOptions) {
        return this.model.update(group, params);
    }

    async remove(id: string) {
        try {
            const group = await this.model.findOne({ where: { id } });

            if (!group) return '';

            const result = await group.destroy();
            const userGroups: any = await sequelize.models.usergroup.findAll({
                raw: true,
                where: {
                    groupid: id,
                },
                attributes: ['userid'],
            });

            await sequelize.models.usergroup.destroy({
                where: {
                    userid: userGroups.map(
                        ({ userid }: { userid: string }) => userid
                    ),
                },
            });

            return result;
        } catch (err) {
            return err;
        }
    }
}
