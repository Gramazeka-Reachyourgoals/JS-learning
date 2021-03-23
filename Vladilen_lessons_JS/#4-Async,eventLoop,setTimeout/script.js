// Asyncrony,eventLoop,setTimeout

console.log('Start');

console.log('Start 2');

function timeOut2sec() {
	console.log('timeOut2sec');
}

window.setTimeout(() => {
	console.log('Inside timeout, after 2 sec');
}, 4000)

setTimeout(() => {
	console.log('Inside timeout');
}, 0)

setTimeout(timeOut2sec, 2000)

console.log('End');