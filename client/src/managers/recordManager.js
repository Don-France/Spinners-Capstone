const _apiUrl = "/api/record";

export const getRecords = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const createRecord = async (newRecord) => {
    console.log(newRecord);
    try {
        const response = await fetch(`${_apiUrl}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecord)
        });

        if (!response.ok) {
            console.log(response);
            console.log(newRecord)
            throw new Error("Failed to create record");
        }

        return response.json();
    } catch (error) {
        // Handle and log any errors here
        console.error("Error creating record:", error);
        throw error; // Optionally rethrow the error for handling at a higher level
    }
};
