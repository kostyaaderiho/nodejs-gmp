import { Model } from 'sequelize';

type Permission = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

export type TGroup = {
    id: string;
    name: string;
    permissions: Array<Permission>;
};

export interface IGroupModel extends Model {
    id: string;
    name: string;
    permissions: Array<Permission>;
}
