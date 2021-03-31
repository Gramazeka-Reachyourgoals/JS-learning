const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.responseType = 'json';
		xhr.setRequestHeader('Content-Type', 'application/json')

		xhr.onload = () => {
			(xhr.status >= 200) ? resolve(xhr.response): reject(xhr.response);
		}

		xhr.onerror = () => {
			reject(xhr.response);
		}

		xhr.send(JSON.stringify(body))
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