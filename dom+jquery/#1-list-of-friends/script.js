var nameFriend = ['Den', 'Valik', 'Sergey'];
$("h1").text("My friends");

for (var i = 0; i < nameFriend.length; i++) {
	$("body").append("<p>~ " + nameFriend[i] + ' smells ~' + "</p>");
	$('p').eq(i).hide().fadeIn(500 + i * 600);
}

// Tries of functional jQuery

// var head = document.getElementById("head-main")
// console.log(head.innerHTML);

// var newHead = prompt("Provide anew heading, Dude ^_- !");
// $("#head-main").text(newHead);
// console.log($("#head-main").text());

// $("body").append("<p>Heavy metal Ruuulit!</p>");
// for (var i = 0; i < 3; i++) {
// 	$('h1').fadeOut(1000).fadeIn(1000);
// }
// $('h1').slideUp(1000).slideDown(1000);
// $('h1').hide(1000);

// for (var i = 0; i < 3; i++) {
// 	var hobby = prompt("Tell me your hobbies!");
// 	$("body").append("<p>" + hobby + "</p>");
// }