import { User } from '../../../types/user';

/**
 * Get users based on loginSubstring & limit.
 */
export const getAutoSuggestUsers = (
    users: Array<User>,
    loginSubstring: string = '',
    limit?: number
): Array<User> => {
    return users
        .filter((user: User) => user.login.indexOf(loginSubstring) !== -1)
        .sort((a, b) => {
            if (a.login > b.login) return 1;
            if (a.login < b.login) return -1;
            return 0;
        })
        .slice(0, limit);
};
