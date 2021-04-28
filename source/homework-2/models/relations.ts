import { UserModel, GroupModel } from './';

UserModel.belongsToMany(GroupModel, { through: 'usergroups' });
GroupModel.belongsToMany(UserModel, { through: 'usergroups' });
