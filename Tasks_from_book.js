// "JavaScript for kids" Nick Morgan

//p.75
//task#1
function fucker() {
	var arr = ["Bobmer", "Heaven", "Little bitch", "Sanava", "bitch"];
	var adj = ["Ugly", "Awful", "Horrible"];
	var ph = ["dick", "DICK", "BIG BALLS", "huge cock", "HUUGE COOOCK"];
	var go = [];
	go.push(adj[Math.floor(Math.random() * adj.length)], arr[Math.floor(Math.random() * arr.length)], "lick", "my", ph[Math.floor(Math.random() * ph.length)], "!!!");
	go = go.join(" ");
	alert(go);
};
fucker();

//task#2
function fucker() {
	var arr = ["neck", "ass", "head", "bubby"];
	var adj = ["ugly", "awful", "horrible"];
	var ph = ["horse", "bull", "marmot", "squirell"];
	var go = [];
	go.push("Your", arr[Math.floor(Math.random() * arr.length)], "is more", adj[Math.floor(Math.random() * adj.length)], "than a", ph[Math.floor(Math.random() * ph.length)] + "'s", arr[Math.floor(Math.random() * arr.length)]);
	go = go.join(" ");
	alert(go);
};
fucker();

//task#3
function fucker() {
	var arr = ["bobmer", "heaven", "little bitch", "sanava", "bitch"];
	var adj = ["Ugly", "Awful", "Horrible"];
	var ph = ["dick", "DICK", "BIG BALLS", "huge cock", "HUUGE COOOCK"];
	var go = '';
	go = adj[Math.floor(Math.random() * adj.length)] + " " + arr[Math.floor(Math.random() * arr.length)] + " lick" + " my " + ph[Math.floor(Math.random() * ph.length)] + "!!!";
	alert(go);
};
fucker();

//task#4
var arr = [3, 2, 1];
console.log(arr.join(' is bigger than '));

//p.93
//task#1 - Counter of scores
var scores = {
	Valyun: 0,
	Max: 0,
	Den: 0
};
//I play with my friends game and get scores
scores.Max = 1;
scores["Den"] = 5;
scores.Valyun = 8;
scores

//task#2 - What are arrays and objects
var myCrazyObject = {
	"name": "A ridiculous object",
	"some array": [7, 9, {
		purpose: "confusion",
		number: 123
	}, 3.3],
	"random animal": "Banana Shark"
};
//get 123 from object with 1 line of code
myCrazyObject["some array"][2].number;

//p.129
//task#1 - Awesome animals
var animals = ["Cat", "Fish", "Distinguish", "Lemur", "Marmot", "Bambur"];
for (var i = 0; i < animals.length; i++) {
	animals[i] = "Awesome " + animals[i];
}
console.log(animals);

//task#2 - Generator of random strings
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";
while (randomString.length < 10) {
	randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
randomString;

//task#3 - H4ck3r sp34k
var input = "javascript is awesome";
var output = "";
for (var i = 0; i < input.length; i++) {
	switch (input[i]) {
		case "a":
			output += "4";
			break;
		case "e":
			output += "3";
			break;
		case "i":
			output += "1";
			break;
		case "o":
			output += "0";
			break;
		default:
			output += input[i];
			break;
	}
}
output;

//p.173
//task#1 Counting with function

function add(a1, a2) {
	return a1 + a2;
}

function multiply(b1, b2) {
	return b1 * b2;
}

alert("Answer is " + add(multiply(36325, 9824), 777));

//task#2 Comparing arrays

function areArraysSame(arr1, arr2) {
	// compare length of arrays
	if (arr1.length !== arr2.length) {
		return false;
	}
	// compare elements of arrays
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
};

areArraysSame([1, 2, 3], [4, 5, 6]);
// false
areArraysSame([1, 2, 3], [1, 2, 3]);
// true
areArraysSame([1, 2, 3], [1, 2, 3, 4]);
// false

//task#3 Gallows-tree with functions

// My functions
function pickWord() {

};

function setupAnswerArray(word) {

};

function showPlayerProgress(answerArray) {

};

function getGuess() {

};

function updateGameState(guess, word, answerArray) {

};

function showAnswerAndCongratulatePlayer(answerArray) {

};

// Condition of task
var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
	showPlayerProgress(answerArray);
	var guess = getGuess();
	if (guess === null) {
		break;
	} else if (guess.length !== 1) {
		alert("Plese enter a single letter.");
	} else {
		var correctGuesses = updateGameState(guess, word, answerArray);
		remainingLetters -= correctGuesses;;
	}
}

showAnswerAndCongratulatePlayer(answerArray);