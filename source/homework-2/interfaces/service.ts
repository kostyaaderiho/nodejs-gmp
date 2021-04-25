/* eslint-disable */
import { UpdateOptions, FindOptions, Model } from 'sequelize';
export interface Service {
    create(entity: object): Promise<object>;
    update(entity: object, params: UpdateOptions): Promise<object>;
    getById(params: FindOptions): Promise<Model<any, any> | null>;
    get(params: FindOptions): Promise<object>;
}
