// closures(замыкания)

// function createCalcFunction(n) {
// 	return function () {
// 		console.log(1000*n);
// 	}
// }

// const calc = createCalcFunction(42);
// // func calc() has inside const n=42, & it's closed(n won't change)
// calc()

// function createIncrementor(n) {
// 	return function (num) {
// 		return n+num
// 	}
// }

// // closed n=1
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)

// // parameter inside it's addOne(num)
// console.log(addOne(10));
// console.log(addOne(41));
// console.log(addTen(10));
// console.log(addTen(41));

// function urlGenerator(domain) {
// 	return function (url) {
// 		return `https://${url}.${domain}`
// 	}
// }

// // closed domain='com'
// const comUrl=urlGenerator('com');
// // closed domain='ua'
// const uaUrl=urlGenerator('ua');

// // parameter inside it's comUrl(url)
// console.log(comUrl('google'));
// console.log(comUrl('netflix'));
// console.log(uaUrl('okko'));
// console.log(uaUrl('rozetka'));

// console.log(comUrl('rozetka'));

/* Написать свою функцию bind
	Пример работы:

	function logPerson() {
		console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
	}

	const person1 = {name: 'Ihor', age: 23, job: 'Frontend'}
	const person2 = {name: 'Masha', age: 21, job: 'Waitress'}

	bind(person1, logPerson)
	bind(person2, logPerson)
*/

const person1 = {name: 'Ihor', age: 23, job: 'Frontend'}
const person2 = {name: 'Masha', age: 21, job: 'Waitress'}

// my solve
// function logPerson(context) {
// 	console.log(`Person: ${context.name}, ${context.age}, ${context.job}`);
// }

// function bind(person, func) {
// 	return func(person)
// }

// bind(person1, logPerson)
// bind(person2, logPerson)
// bind({name: 'Kolya', age: 32, job: 'Killer'}, logPerson)

// Vladilen solve with closures
function logPerson() {
	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

// function bind(context, fn) {
// 	return function (...args) {
// 		fn.apply(context, args)
// 	}
// }

function bind(context, fn) {
	return fn.apply(context)
}

bind(person1, logPerson)
bind(person2, logPerson)
bind({name: 'Kolya', age: 32, job: 'Killer'}, logPerson)