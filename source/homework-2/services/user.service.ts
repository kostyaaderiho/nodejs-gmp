import { ModelCtor, Model, UpdateOptions, FindOptions } from 'sequelize';

import { TUser, Service } from '../interfaces';

export class UserService implements Service {
    model;

    constructor(model: ModelCtor<Model>) {
        this.model = model;
    }

    create(user: TUser) {
        return this.model.create({
            ...user,
            age: +user.age,
            deleted: false,
        });
    }

    getById(params: FindOptions) {
        return this.model.findOne(params);
    }

    get(params: FindOptions) {
        return this.model.findAll(params);
    }

    update(user: TUser, params: UpdateOptions) {
        return this.model.update(user, params);
    }
}
