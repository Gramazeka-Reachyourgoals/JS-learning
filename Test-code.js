// SoftServe quiz test
// #Task 1: number of words in string

function numberOfWords(str) {
	return str.split(' ').length
}

numberOfWords('I love Chernivtsi');
// 3
numberOfWords('I agree with u meeen');
// 5
numberOfWords('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, eum.');
// 10

// #Task 2: number of specific symbols in string
// numberOfSymbols('Hello')
// {h: 1, e: 1, l: 2, o: 1}
function numberOfSymbols(str) {
	var result = {};

	strArr = str.toLowerCase().split('');
	strArr.map((e) => {
		if (!result[e]) {
			result[e] = 1
		} else {
			result[e]++
		}
	})

	return result
}

numberOfSymbols('Hello');
// {h: 1, e: 1, l: 2, o: 1}
numberOfSymbols('KKKawaa Banga123321');
// {" ": 1,	1: 2,	2: 2,	3: 2,	a: 5,	b: 1,	g: 1,	k: 3,	n: 1,	w: 1}