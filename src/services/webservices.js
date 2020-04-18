const base_url = 'http://bf6b7fe1.ngrok.io/';

function getapi(endpoint) {
    const apiObj = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        }
    }
    return fetch(base_url + endpoint, apiObj)
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
    return fetch(base_url + endpoint, apiObj)
        .then(response => {
            return response.json();
        })
        .catch(err => {
            return { responseMessage: "Something went wrong. Please try again." }
        });
}

export { getapi, postapi };