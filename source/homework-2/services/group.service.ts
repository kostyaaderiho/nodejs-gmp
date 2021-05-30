import { ModelCtor, Model, UpdateOptions, FindOptions } from 'sequelize';

import { TGroup, Service } from '../interfaces';

export class GroupService implements Service {
    model;

    constructor(model: ModelCtor<Model>) {
        this.model = model;
    }

    create(group: TGroup) {
        return this.model.create(group);
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
        const group = await this.model.findOne({ where: { id } });

        if (!group) return '';

        const result = await group.destroy();

        return result;
    }
}
