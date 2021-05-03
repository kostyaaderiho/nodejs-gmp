import { DataTypes } from 'sequelize';

import { UserModel } from './user.model';
import { GroupModel } from './group.model';
import { IUserGroupModel } from '../interfaces';
import { sequelize } from '../data-access/connection';

export const UserGroupModel = sequelize.define<IUserGroupModel>(
    'usergroup',
    {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            references: {
                model: UserModel,
                key: 'id'
            }
        },
        groupId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            references: {
                model: GroupModel,
                key: 'id'
            }
        }
    },
    {
        timestamps: false
    }
);
