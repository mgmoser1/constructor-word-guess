// This constructor should be able to either display an underlying character 
//or an underscore, depending on whether or not the user has guessed the letter.

var Letter = function(letter){
//    A string value to store the underlying character for the letter

    this.char = letter;

//    A boolean value that stores whether that letter has been guessed yet

    this.guessed = false;
    
// A function that returns the underlying character if the letter has been guessed,
// or a placeholder (like an underscore) if the letter has not been guessed
       
    Letter.prototype.displayLetter = function() {
        if (this.guessed == true) {
            display = this.char;
        }else {
            display = "_";
        }
        console.log(display);
    };

//  A function that takes a character as an argument and checks it against
// the underlying character, updating the stored boolean value to true if it 
// was guessed correctly

    Letter.prototype.guessChecker = function(guess) {
        if (this.char === guess) {
            this.guessed = true;
        }
    }

}

/* var a = new Letter("a");

console.log(a.char);
console.log(a.guessed);
a.displayLetter(); */

module.exports = Letter;