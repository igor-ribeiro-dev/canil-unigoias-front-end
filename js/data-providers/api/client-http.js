const baseUrl = 'http://localhost'

export async function get(uri) {
    return new Promise(((resolve, reject) => {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        const options = {
            method: 'GET',
            headers: headers
        };

        fetch(baseUrl + uri, options)
            .then(response => response.json())
            .then(resolve)
            .catch(reject)
    }));
}

export async function post(uri, data) {
    return new Promise(((resolve, reject) => {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        };

        fetch(baseUrl + uri, options)
            .then(response => response.json())
            .then(resolve)
            .catch(reject)
    }));
}