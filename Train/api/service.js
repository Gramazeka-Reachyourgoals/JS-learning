// DAL - data access layer(уровень доступа к данным)

function countryRequest(country) {
	if (country != '' || undefined) {
		const promise = axios.get('http://universities.hipolabs.com/search?country=' + country);
		return promise.then((response) => {
			return response.data
		});
	}
}

function getTask() {
	const promise = axios.get('https://repetitora.net/api/JS/Tasks?widgetid=1&count=30');
	return promise.then((response) => {
		return response.data
	});
}

function createTask(title) {
	const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
		widgetid: 1,
		title: title
	});
	return promise.then((response) => {
		return response.data
	});
}

function updateTask(id, title, done) {
	const promise = axios({
		method: 'put',
		url: `https://repetitora.net/api/JS/Tasks`,
		data: {
			widgetid: 1,
			taskid: id,
			title: title,
			done: done
		}
	});

	// alternative
	// const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
	// 	widgetid: 1,
	// 	taskid: id,
	// 	title: title,
	// 	done: done
	// });
	return promise.then((response) => {
		return response.data
	});
}

function deleteTask(id) {
	const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetid=1&taskId=${id}`);
	return promise.then((response) => {
		return response.data
	});
}












// only with jQuery
function countryRequestOld(country) {
	if (country != '' || undefined) {
		const promise = $.ajax('http://universities.hipolabs.com/search?country=' + country);
		return promise;
	}
}

// alternative tiwh callbacks + jQuery
// function countryRequest(country, successCallback) {
// 	if (country != '' || undefined) {
// 		$.ajax('http://universities.hipolabs.com/search?country=' + country, {
// 			success: (data) => {
// 				successCallback(data);
// 			}
// 		})
// 	}
// }