import { DataTypes } from 'sequelize';

import { sequelize } from '../data-access/connection';

export const GroupModel = sequelize.define(
    'group',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        permission: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);
