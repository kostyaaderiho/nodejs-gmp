import { DataTypes } from 'sequelize';

import { sequelize } from '../data-access/connection';
import { IUserModel } from '../interfaces/user';

export const UserModel = sequelize.define<IUserModel>(
    'user',
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
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
