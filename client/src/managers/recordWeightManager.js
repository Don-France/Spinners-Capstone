const _apiUrl = "/api/recordweight";

export const getRecordWeights = () => {
    return fetch(_apiUrl).then((res) => res.json());
};