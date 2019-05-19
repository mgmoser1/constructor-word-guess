var Letter = require("./Letter");

// Create a new Word object
var letter = new Letter(); // ?

function Word(chosenWord){
    this.stringArr = chosenWord.split("");
    this.concatDisplay = "";
    this.letterArr = [];

    Word.prototype.letterCreator = function(){
    //    for (i=0;i<this.stringArr.length; i++) {
    //        console.log("this.stringArr[i]: " + this.stringArr[i]); // these are letters
            for (var i=0; i<this.stringArr.length; i++) {
                if (!(this.letterArr.includes(this.stringArr[i]))) {
                var newLetter = new Letter(this.stringArr[i]);
          //  console.log("New Letter from letterCreator: " + newLetter.char); // working
                this.letterArr.push(newLetter);
          }
        }
       
    //}
}

    Word.prototype.displayWord = function() {

    //    var  displayChar = ""; // []?
        this.concatDisplay = "";
        console.log("letterArr.char: " + this.letterArr[1].char);
        console.log("letterArr.char: " + this.letterArr[1].guessed);
        displayArr = letter.displayCreator(this.letterArr, this.stringArr);
        
//         
    //    displayChar = letter.displayCreator(this.letterArr[i]);
        this.concatDisplay = displayArr.join(" ");
    //    console.log('displayChar: ' + displayChar);
    //    }

        console.log(this.concatDisplay);
       
    };

    Word.prototype.checkGuess = function(g){
  //      console.log("This is 'g' from Word.checkGuess: " + g);  working
    //    var inWord = this.stringArr.includes(g);
    //    if (inWord == true) {
   //     console.log("This is g from inside the Word.checkGuess if statement:" + g); working
        var guessCorrect = letter.guessChecker(g,this.letterArr);
    //}

    if (guessCorrect == true) {
        console.log("That was just luck!");
    }else{
        console.log("Wrong! My genius has prevailed yet again!");
    }
    //    console.log(this.concatDisplay);
        return guessCorrect;
    }

    Word.prototype.checkComplete = function() {
        var complete;
        if (this.concatDisplay.includes("_")) {
           complete = false;
        }else {
           complete = true;
           this.letterArr = [];
        }
        return complete;
    }
}







module.exports = Word;