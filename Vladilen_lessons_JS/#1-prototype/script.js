// prototype
const person = new Object({
	name: 'Ihor',
	age: 23,
	greet: function () {
		console.log('Greet!');
	}
})

Object.prototype.sayHello = function () {
	console.log('Hello!')
}

const lena = Object.create(person)
lena.name = 'Elena'

const str = new String('I am string')
const bol = new Boolean(false)
const num = new Number(123)

console.log(typeof str, typeof bol, typeof num);