import { Model } from 'sequelize';

export interface User {
    id: string;
    login: string;
    password: string;
    age: number;
    deleted: boolean;
}
export interface UserModel extends Model {
    id: string;
    login: string;
    password: string;
    age: number;
    deleted: boolean;
}
