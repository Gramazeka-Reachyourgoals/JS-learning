function smallestCommons(arr) {
	arr = arr.sort((a, b) => a - b);
	let smallerNum = arr[0];
	let biggerNum = arr[1];
	let arrNumbersBetween = [];
	for (let i = smallerNum + 1; i < biggerNum; i++) {
		arrNumbersBetween.push(i)
	}

	let i = biggerNum + 1;
	let smallestCommonMultiple = null;

	// find smallestCommonMultiple
	function findCommon(i) {
		do {
			i++;
			smallestCommonMultiple = i;
		} while (!(i % biggerNum == 0 && i % smallerNum == 0));
		return smallestCommonMultiple
	}

	smallestCommonMultiple = findCommon(i);
	while (!arrNumbersBetween.every(el => smallestCommonMultiple % el == 0)) {
		findCommon(smallestCommonMultiple);
	}

	console.log(`smallestCommonMultiple: ${smallestCommonMultiple}`)
	return smallestCommonMultiple;
}


// smallestCommons([1, 5]); // 60
// smallestCommons([5, 1]); // 60
// smallestCommons([2, 10]); // 2520
// smallestCommons([1, 13]); // 360360
smallestCommons([23, 18]); // 6056820