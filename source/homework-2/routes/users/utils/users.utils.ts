import { User } from '../../../types/user';

/**
 * Get users based on loginSubstring & limit.
 */
export const getAutoSuggestUsers = (
    users: Array<User>,
    loginSubstring?: string,
    limit?: number
): Array<User> => {
    return users
        .filter(
            (user: User) =>
                !loginSubstring || user.login.includes(loginSubstring)
        )
        .sort((a, b) => a.login.localeCompare(b.login))
        .slice(0, limit);
};
