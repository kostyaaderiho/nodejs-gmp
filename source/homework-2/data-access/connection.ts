import { Sequelize } from 'sequelize';

// @ts-ignore
export const sequelize = new Sequelize(process.env.DB_URL);
