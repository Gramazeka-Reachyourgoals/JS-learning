// Todo: Write a function biggestNum(array) to  find the biggest number in the given array.

// test commands
// expected
// +6
console.log(biggestNum([1, 2, 3, 4, 5, 6]))
// +10000
console.log(biggestNum([1, 2, 3222, 10000, -10, 4, 5, 6]))	
// +1
console.log(biggestNum([1, 0]))
// +101010
console.log(biggestNum([1, Number('101010'), 10]))

function biggestNum(arr) {
	var big=arr[0];
	for(var i=1; i<arr.length; i++){
		if (arr[i]>big){
			big=arr[i]
		}
	}
	return big
}