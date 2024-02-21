export const isValidInstagramUsername = (username) => {
    const instagramUsernameRegex = /^@[a-zA-Z0-9][a-zA-Z0-9._]{0,28}[a-zA-Z0-9]$/;
    return instagramUsernameRegex.test(username);
};
