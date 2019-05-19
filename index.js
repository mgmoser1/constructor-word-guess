
// External Packages
var inquirer = require('inquirer');

// Internal Modules
var Word = require('./Word');

// Create a new Word object
// var word = new Word();

var guess = "";
var guessCount = 10;
var wordArray = ["lemon verbena", "lavender", "peppermint", "cinnamon", "ginger", "saffron", "star anise"];
// var currentWord = newWord(); // needs to be a function that can be called.
var word = newWord();
var prevGuesses = [];
var guessRight = false;


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function newWord() {
    randomWord = wordArray[getRandomInt((wordArray.length) - 1)];
    currentWord = new Word(randomWord);
    //    console.log("TESTER currentWord: " + currentWord);  // returns object

    return currentWord;
}



// Get User Input //
function getInput() {
    word.displayWord(); // 1
    console.log("Guesses Left: " + guessCount);
    if (guessCount > 0) {
inquirer
.prompt([
	{
        name: 'input',
        message: "Choose a letter!",
    },
])
.then (function(answers) {
    guess = answers.input;

    // function here
    guessChecker(guess, prevGuesses);
    
})
}else {
    console.log("You lose! *KABLOOEY!*");
    console.log("Let's play again!");
    guessCount = 10;
    startGame();

}
}

// Check User Guess //
function guessChecker(g,arr) {
    
        var n = arr.includes(g);
        if (n == true) {
            console.log("You fool! You guessed that already!");
            getInput();
          
        }else {
    //        console.log("This is 'g' from index guessChecker: " + g); working
            guessRight =  word.checkGuess(g);
            
            arr.push(g);
       
            if (guessRight == false) {
                guessCount--;
                getInput();
            }else {
                 // check for win/lose state
                var gameWon = false;
                gameWon = word.checkComplete();
                checkWin(gameWon);
            }
        }   
   }

   function checkWin(g) {
         if (g === true) {
            console.log("Drat! I have been beaten ingloriously in wordy combat!");
            startGame();
        }else {
            getInput();
        }
   }


// Start Game //

console.log('Mwahahaha! It is I, Doctor Atrocius!\n');
console.log('You have fallen into my trap!\n');
console.log('Guess the words or die in a fiery explosion!\n');

function startGame() {
newWord();
word.letterCreator();
getInput(); // move out of this function.
}

startGame();


