import { DataTypes } from 'sequelize';

import { sequelize } from '../data-access/connection';

export const User = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);
