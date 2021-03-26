// function f1() {
// 	console.log('FUNC #1');
// }

// function BIGY(callback) {
// 	console.log(`I will run ${callback} function`);
// 	callback();
// }

// BIGY(f1)

function sayByeWithAlert(message) {
	alert(message);
}

function sayByeWithConsole(message) {
	console.log(message);
}

function sayByeWithButton(message) {
	var clickMeButton = document.querySelector('#click-me');
	clickMeButton.innerHTML = message;
}

BIGY(sayByeWithButton)

// var clickMeButton = document.querySelector('#click-me');
// clickMeButton.addEventListener('click', sayBye)