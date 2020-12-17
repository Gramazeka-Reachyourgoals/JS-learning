// Todo: Write a function filter(array) that filters out strings from the array and returns filtered array.

// test commands
// expected
// +[ 1, 23, [ 2 ], { a: 'b' } ]
console.log(filter([1, '2', 23, [2], {a: 'b'}, 'test']))
// +[ 22 ]
console.log(filter([22, 'test']))
// +[ [Function] ]
console.log(filter(['one', 'two', 'three', () => {}]))
// +[]
console.log(filter(['one', 'two', 'three', 'four']))

function filter(arr) {
	var arrA=[];
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'string') {
			arrA.push(arr[i])
		}
	}
	return arrA
}