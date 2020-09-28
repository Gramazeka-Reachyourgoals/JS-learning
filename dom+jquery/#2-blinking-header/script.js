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