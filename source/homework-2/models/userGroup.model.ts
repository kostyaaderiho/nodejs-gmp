import { DataTypes } from 'sequelize';

import { UserModel, GroupModel } from './';
import { IUserGroupModel } from '../interfaces';
import { sequelize } from '../data-access/connection';

export const UserGroupModel = sequelize.define<IUserGroupModel>(
    'usergroup',
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
        },
        userid: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: UserModel,
                key: 'id',
            },
        },
        groupid: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: GroupModel,
                key: 'id',
            },
        },
    },
    {
        timestamps: false,
    }
);
