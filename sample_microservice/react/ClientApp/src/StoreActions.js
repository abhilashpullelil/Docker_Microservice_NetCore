
export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(userName) {
    return { type: UPDATE_USER, userName };
};