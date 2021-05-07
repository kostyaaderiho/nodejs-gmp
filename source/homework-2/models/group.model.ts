import { DataTypes } from 'sequelize';

import { sequelize } from '../data-access/connection';
import { IGroupModel } from '../interfaces/group';

export const GroupModel = sequelize.define<IGroupModel>(
    'group',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        permission: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);
