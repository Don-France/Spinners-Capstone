const _apiUrl = "/api/color";

export const getColors = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const adminDeleteAColor = (id) => {
    return fetch(`${_apiUrl}/${id}/delete`, {
        method: "Delete",
    });
};

export const getColorById = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((res) => res.json())
};
