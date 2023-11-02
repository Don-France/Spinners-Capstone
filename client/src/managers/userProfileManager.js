const _apiUrl = "/api/userprofile";

export const getUserProfiles = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const getUserProfileById = (id) => {

    return fetch(`${_apiUrl}/${id}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Request failed with status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            console.log("API Response:", data);
            return data;
        })
        .catch((error) => {
            console.error("Error fetching user profile:", error);
        });

};