import { DataTypes } from 'sequelize';

import { sequelize } from '../data-access/connection';

export const UserGroupModel = sequelize.define(
    'usergroup',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        groupId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);
