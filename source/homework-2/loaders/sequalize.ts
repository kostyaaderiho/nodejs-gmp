import { sequelize } from '../data-access/connection';
import '../models/relations';

export const sequalize = async () => {
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
};
