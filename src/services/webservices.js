const BASE_URL = 'http://7587e382.ngrok.io/';
const API_ENDPOINT_ENUM = {
    "LOGIN": "login",
    "POSITIVE_PATIENTS": "patients/status/101",
    "POSSIBLE_PATIENTS": "patients/status/102",
    "ALL_PATIENTS": "patients/status/103"
}


function getapi(endpoint) {
    endpoint = API_ENDPOINT_ENUM[endpoint];
    const apiObj = {
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
        }
    }
    return fetch(BASE_URL + endpoint, apiObj)
        .then(response => {
            return response.json();
        })
        .catch(err => {
            return { responseMessage: "Something went wrong. Please try again." }
        });
}

function postapi(endpoint, obj) {
    endpoint = API_ENDPOINT_ENUM[endpoint];
    const apiObj = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(obj)
    }
    return fetch(BASE_URL + endpoint, apiObj)
        .then(response => {
            return response.json();
        })
        .catch(err => {
            return { responseMessage: "Something went wrong. Please try again." }
        });
}

export { getapi, postapi };