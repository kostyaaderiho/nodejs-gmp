import { UserModel, GroupModel, UserGroupModel } from './';

UserModel.belongsToMany(GroupModel, {
    through: UserGroupModel,
    timestamps: false
});

GroupModel.belongsToMany(UserModel, {
    through: UserGroupModel,
    timestamps: false
});
