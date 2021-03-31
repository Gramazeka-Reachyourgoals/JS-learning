const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
	const headers = {
		'Content-Type': 'application/json'
	};

	// return promise
	return fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: headers
	}).then(response => {
		if (response.ok) {
			return response.json();
		}
		return response.json().then(err => {
			const e = new Error('Smth goes wrong');
			e.data = err
			throw e
		})
	})
}

// sendRequest('GET', requestURL)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

const body = {
	name: 'Ihor',
	age: 23
}

sendRequest('POST', requestURL, body)
	.then(data => console.log(data))
	.catch(err => console.log(err))