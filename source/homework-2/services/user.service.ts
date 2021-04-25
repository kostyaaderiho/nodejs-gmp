import { v4 as uuidv4 } from 'uuid';
import { ModelCtor, Model, UpdateOptions, FindOptions } from 'sequelize';

import { User, Service } from '../interfaces';

export class UserService implements Service {
    model;

    constructor(model: ModelCtor<Model>) {
        this.model = model;
    }

    create(user: User) {
        return this.model.create({
            ...user,
            age: +user.age,
            deleted: false,
            id: uuidv4(),
        });
    }

    getById(params: FindOptions) {
        return this.model.findOne(params);
    }

    get(params: FindOptions) {
        return this.model.findAll(params);
    }

    update(user: User, params: UpdateOptions) {
        return this.model.update(user, params);
    }
}
