generateRandomInsult = function () {
	var pickRandomWord = function (words) {
		return words[Math.floor(Math.random() * words.length)]
	}

	var randomBody = ["Face", "Nose", "Hair"];
	var randomAdj = ["Smelly", "Boring", "Stupid"];
	var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

	// Connect all random strings together
	var randomString = "Your " + pickRandomWord(randomBody) + " is like a " + pickRandomWord(randomAdj) + " " + pickRandomWord(randomWords) + "!!!";

	return randomString;
}

generateRandomInsult();