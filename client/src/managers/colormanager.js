const _apiUrl = "/api/color";

export const getColors = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const assignColor = (recordId, colorId) => {
    return fetch(`${_apiUrl}/${recordId}/assignColor?colorId=${colorId}`, {
        method: "POST",
    });
};

export const unassignColor = (recordId, colorId) => {
    return fetch(`${_apiUrl}/${recordId}/unassignColor?colorId=${colorId}`, {
        method: "POST",
    });
};
