const BASE_URL = 'http://f9b37789.ngrok.io/';

function getapi(endpoint) {
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