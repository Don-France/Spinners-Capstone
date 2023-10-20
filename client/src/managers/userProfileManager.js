const _apiUrl = "/api/userprofile";

export const getUserProfiles = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

// Get user profiles with roles
export const getUserProfilesWithRoles = () => {
    return fetch(_apiUrl + "/withroles").then((res) => res.json());
};