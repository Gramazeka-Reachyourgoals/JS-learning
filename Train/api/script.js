// UI - user interface
const getCountry = document.querySelector('#getCountry');
const getTasks = document.querySelector('#getTasks');


function deleteP() {
	document.querySelectorAll('p').forEach((el) => {
		el.remove()
	})
}

// debugger;
// createTask('Learn CSS');
// deleteTask('5c2af84a-0a7a-48e4-8ad2-267a8676c67d');
updateTask('515cf987-dfe0-4151-b760-bdab40ee1bb7', 'IHor changed it', true)

getTasks.addEventListener('click', () => {
	deleteP();
	const promise = getTask();
	promise.then(onTasksReceived);
})

function onTasksReceived(tasks) {
	document.querySelector('#tasksContent').innerHTML = '';
	tasks.forEach(task => {
		const li = document.createElement('li');
		li.innerHTML = task.title;
		li.dataset.id = task.id;
		document.querySelector('#tasksContent').append(li);
	})
}

getCountry.addEventListener('click', () => {
	deleteP();
	var country = document.querySelector('#textarea').value.trim().toLowerCase();
	const promise = countryRequest(country);
	promise.then(onCountryReceived);
})

function onCountryReceived(array) {
	array.forEach(el => {
		const p = document.createElement('div');
		p.innerHTML = `<p>${el.name} - </p><p>${el.domains}</p>`;
		document.querySelector('body').append(p);
	})
}

// alternative with callbacks + jQuery
// $('#send').on('click', () => {
// 	$('p').remove()
// 	var country = $('#textarea').val().trim().toLowerCase();
// 	countryRequest(country, onDataReceived)
// })

// function onDataReceived(data) {
// 	data.forEach(el => {
// 		const p = $(`<div class="content"><p>${el.name} - </p><p>${el.domains}</p></div>`)
// 		$('body').append(p)
// 	})
// }