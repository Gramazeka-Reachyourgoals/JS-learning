// context, this, call/bind/apply
function hello() {
	console.log('Hello!', this);
}

const person={
	name: 'Ihor',
	age: 23,
	sayHello: hello,
	sayHelloWindow: hello.bind(window),
	logInfo: function (job, phone) {
		console.group(`${this.name} info:`);
		console.log(`Name is ${this.name}`);
		console.log(`Age is ${this.age}`);
		console.log(`Job is ${job}`);
		console.log(`Phone is ${phone}`);
		console.groupEnd()
	}
}

const lena={
	name: 'Elena',
	age: 23
}

// same
person.logInfo.bind(lena, 'Frontend', '8-999-123-12')()
// call func at this time
person.logInfo.call(lena, 'Frontend', '8-999-123-12')
// take params as send param=>array
person.logInfo.apply(lena, ['Frontend', '8-999-123-12'])

// same
// const fnLenaInfo = person.logInfo.bind(lena)
// fnLenaInfo('Frontend', '8-999-123-12')

// === practice

const array= [1,2,3,4,5]

// function multBy(arr, n) {
// 	return arr.map(function (el) {
// 		return el * n
// 	})
// }

Array.prototype.multBy=function (n) {
	return this.map(function (el) {
		return el * n
	})
}

console.log(array.multBy(20));
