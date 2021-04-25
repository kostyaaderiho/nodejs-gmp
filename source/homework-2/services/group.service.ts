import { v4 as uuid } from 'uuid';
import { ModelCtor, Model, UpdateOptions, FindOptions } from 'sequelize';

import { Group, Service } from '../interfaces';

export class GroupService implements Service {
    model;

    constructor(model: ModelCtor<Model>) {
        this.model = model;
    }

    create(group: Group) {
        return this.model.create({
            ...group,
            id: uuid(),
        });
    }

    getById(params: FindOptions) {
        return this.model.findOne(params);
    }

    get(params?: FindOptions) {
        return this.model.findAll(params);
    }

    update(group: Group, params: UpdateOptions) {
        return this.model.update(group, params);
    }

    async remove(id: string) {
        const group = await this.model.findOne({ where: { id } });

        if (!group) return '';

        return group.destroy();
    }
}
