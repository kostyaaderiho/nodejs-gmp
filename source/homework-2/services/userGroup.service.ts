import { ModelCtor, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

import { UserGroup } from '../interfaces';

export class UserGroupService {
    model;

    constructor(model: ModelCtor<Model>) {
        this.model = model;
    }

    create(group: UserGroup) {
        return this.model.create({
            ...group,
            id: uuidv4(),
        });
    }
}
