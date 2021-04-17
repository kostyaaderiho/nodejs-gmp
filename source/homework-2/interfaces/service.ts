/* eslint-disable */
import { UpdateOptions, FindOptions, Model } from 'sequelize';
export interface Service {
    create(entity: object): Promise<object>;
    update(entity: object, params: UpdateOptions): Promise<object>;
    get(params: FindOptions): Promise<Model<any, any> | null>;
    getList(params: FindOptions): Promise<object>;
}
