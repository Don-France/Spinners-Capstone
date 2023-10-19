const _apiUrl = "/api/recordcolor";

export const getRecordColors = () => {
    return fetch(_apiUrl).then((res) => res.json());
};