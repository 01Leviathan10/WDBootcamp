// Create seacretNumber

var seacretNumber = 4;

//ask user for guess

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
//check guess

if (guess === seacretNumber) {
    alert("You guesst it!!");
} else if (guess < seacretNumber) {
    alert("You are to low!");
} else {
    alert("You are to high!");
}