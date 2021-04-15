import { v4 as uuidv4 } from 'uuid';

import { User, Service } from '../interfaces';
export class UserService implements Service {
    model;

    constructor(model: any) {
        this.model = model;
    }

    create(user: User) {
        return this.model.create({
            ...user,
            age: +user.age,
            deleted: false,
            id: uuidv4()
        });
    }

    update(user: User, params: object) {
        return this.model.update(user, params);
    }

    get(params: object) {
        return this.model.findOne({
            ...params
        });
    }

    getList(params: object) {
        return this.model.findAll({
            ...params
        });
    }
}
