import { Model } from 'sequelize';

export type TUserGroup = {
    id: string;
    userid: string;
    groupid: string;
};

export interface IUserGroupModel extends Model {
    id: string;
    userid: string;
    groupid: string;
}
