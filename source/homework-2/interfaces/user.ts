import { Model } from 'sequelize';

export type TUser = {
    id: string;
    login: string;
    password: string;
    age: number;
    deleted: boolean;
};
export interface IUserModel extends Model {
    id: string;
    login: string;
    password: string;
    age: number;
    deleted: boolean;
}
