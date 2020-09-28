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
// return random word
function pickWord() {
	var words = [
		"body",
		"screen",
		"table",
		"shark",
		"orange",
		"pineapple",
		"plum",
		"carrot",
		"meat",
		"sky",
		"marshmello",
	];
	return words[Math.floor(Math.random() * words.length)];
};
// return array of answer
function setupAnswerArray(word) {
	var answerArray = [];
	for (var i = 0; i < word.length; i++) {
		answerArray[i] = "_";
	}
	return answerArray;
};

function showPlayerProgress(answerArray) {
	// Shows progress to player
	alert("WORD (" + word.length + "X)" + " - " + answerArray.join(" ") + "\nNumber of mistakes : " +
		counterLose);
};

function getGuess() {
	// Get guess from player
	return prompt("Guess a letter, or click Cancel(Отмена) to stop playing.").toLowerCase();
};

function updateGameState(guess, word, answerArray) {
	// Reload state of game
	var i = 0;
	var counterGuess = 0;
	for (var j = 0; j < word.length; j++) {
		if (word[j] === guess) {
			// fix of bag - same letter guessing
			if (answerArray[j] === "_") {
				answerArray[j] = guess;
				counterGuess++;
			}
			i++;
		}
	}
	// Add system of only 5 lifes
	if (i == 0) {
		counterLose--;
	}
	if (counterLose == 0) {
		alert("You lose!");
	}
	return counterGuess;
};

function showAnswerAndCongratulatePlayer(answerArray) {
	// Congratulate the player on quessing the word
	alert(answerArray.join(" "));
	alert("Good job! the answer was " + word);
};

// Condition of task
var word = pickWord();
var answerArray = setupAnswerArray(word);

// create parameter that will be decreasing on L numbers, if player quess the letter
var remainingLetters = word.length;

// create counter of limit tries of guessing
var counterLose = 5;

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

//p.192
//task#1 Creating list of friends by jQuery

var nameFriend = ['Den', 'Valik', 'Sergey'];
$("h1").text("My friends");

for (var i = 0; i < nameFriend.length; i++) {
	$("body").append("<p>~ " + nameFriend[i] + ' smells ~' + "</p>");
	// take each <p> and fadeIn with diff timeout
	$('p').eq(i).hide().fadeIn(500 + i * 600);
}

//task#2 Blinking header jQuery

// #1 Blink 5 times per 1sec

var times = 5;
for (var i = 1; i < times + 1; i++) {
	$('h1').fadeOut(1000 / times / 2).fadeIn(1000 / times / 2);
}

// #2 Duration of animation 1 sec(s)=1 blink(b), 2s=2b, 3s=b

// Set blink time in seconds
var blinkTime = 6;
// How many times should blink during blinkTime
var counterOfBlinks = howManyTimesBlink(blinkTime);

function howManyTimesBlink(blinkTime) {
	var localResult = 0;
	for (var i = 1; i < blinkTime + 1; i++) {
		localResult += i;
	}
	return localResult;
}

for (var i = 1; i < counterOfBlinks + 1; i++) {
	$('h1').fadeOut(1000 / i).fadeIn(1000 / i);
	console.log(i);
}

//task#3 Delay of animation jQuery

for (var i = 0; i < 3; i++) {
	$('h1').fadeOut(500);
	$('h1').delay(2000);
	$('h1').fadeIn(500);
}

//task#4 use fadeTo jQuery

// Changes opacity
$('h1').fadeTo(2000, 0.2);