const _apiUrl = "/api/specialeffect";

export const getSpecialEffects = () => {
    return fetch(_apiUrl).then((res) => res.json());
};