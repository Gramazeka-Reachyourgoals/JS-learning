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

function drawLose(counterLose) {
	ctx.lineWidth = 5;
	switch (counterLose) {
		case 5:
			// head
			ctx.strokeRect(80, 10, 40, 40);
			ctx.beginPath();
			break;
		case 4:
			// body
			ctx.moveTo(100, 50);
			ctx.lineTo(100, 130);
			ctx.stroke();
			break;
		case 3:
			// left leg
			ctx.moveTo(100, 130);
			ctx.lineTo(60, 180);
			ctx.stroke();
			break;
		case 2:
			// right leg
			ctx.moveTo(100, 130);
			ctx.lineTo(140, 180);
			ctx.stroke();
			break;
		case 1:
			// left hand
			ctx.moveTo(60, 50);
			ctx.lineTo(100, 80);
			ctx.stroke();
			break;
		case 0:
			// right hand
			ctx.moveTo(140, 50);
			ctx.lineTo(100, 80);
			ctx.stroke();
			break;
	}
}

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