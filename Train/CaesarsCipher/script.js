function rot13(str) {
	let result = '';
	let strArr = str.split('');
	const twoAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"

	// decoding ROT13 cipher func
	function decode(symbol) {
		let newIndex = twoAlphabets.indexOf(symbol) + 13
		return twoAlphabets[newIndex]
	}

	// create result(string)=>decode if letter, don't change if symbol
	for (let i = 0; i < strArr.length; i++) {
		if (twoAlphabets.indexOf(str[i]) != -1) {
			result += decode(str[i])
		} else {
			result += strArr[i]
		}
	}

	console.log(result);
	return result;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");