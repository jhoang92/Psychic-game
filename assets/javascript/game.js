var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var lettersUsed = [];
var player = null;

var lettersAvail = allLetters[Math.floor(Math.random() * allLetters.length)];

document.onkeyup = function(event) {
	var player = String.fromCharCode(event.keyCode).toLowerCase();

	if (lettersUsed.indexOf(player) < 0 && allLetters.indexOf(player) >= 0) {
		lettersUsed[lettersUsed.length]=player;
		guesses--;
	}

	if (lettersAvail == player) {
		wins++;
		guesses = 9;
		lettersUsed = [];
		lettersAvail = allLetters[Math.floor(Math.random() * allLetters.length)];
	}

	if (guesses == 0) {
		losses++;
		guesses = 9;
		lettersUsed = [];
		lettersAvail = allLetters[Math.floor(Math.random() * allLetters.length)];
	}

    var html = 
    "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guesses + "</p>" + "<p>Your guesses so far: " + lettersUsed + "</p>";
	
	document.querySelector("#game").innerHTML = html;

}