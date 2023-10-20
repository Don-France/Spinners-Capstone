const _apiUrl = "/api/record";

export const getRecords = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

//Create a record order
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

// Add a record to an order
export const addRecord = (id, newRecord) => {
    console.log(newRecord)

    return fetch(`${_apiUrl}/${id}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecord),
    })
        .then((response) => {
            // console.log(response)
            console.log('Response status:', response.status); // Log the status code
            // console.log(newPizza);

            if (!response.ok) {
                console.log('Response text:', response.text()); // Log the response text
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch((error) => {
            console.log('Error:', error); // Log the error
            throw error;
        });
}
