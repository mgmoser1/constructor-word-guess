// This constructor should be able to either display an underlying character 
//or an underscore, depending on whether or not the user has guessed the letter.

function Letter (letty){
//    A string value to store the underlying character for the letter
    this.char = "";
    this.char = letty;

//    A boolean value that stores whether that letter has been guessed yet

    this.guessed = false;
    
// A function that returns the underlying character if the letter has been guessed,
// or a placeholder (like an underscore) if the letter has not been guessed
       
    Letter.prototype.displayCreator = function(arr1, arr2) { // arr1 = letterArr (objects), arr2 = stringArr (strings)
        var wordArr = [];
        var display = "";
        for (var i=0; i<arr2.length; i++) {
            for (var f=0; f<arr1.length; f++) {
                if (arr1[f].char === arr2[i]) {
                    if (arr1[f].guessed == true) {
                        display = arr2[i];  // this is an array of strings, not objects.
                    }else {
                        display = "_";
                    }
                    wordArr.push(display);
                }
            }
        }
        return wordArr;
    }  
  


//  A function that takes a character as an argument and checks it against
// the underlying character, updating the stored boolean value to true if it 
// was guessed correctly

    Letter.prototype.guessChecker = function(guess, letArr) {
        var guessRight = false;
        for (var i=0; i<letArr.length; i++){
            console.log("letArr[i]: " + letArr[i].char);
        
            //// MEGAN NOTE ////
            // Need to assign the true/false value to a variable before the if/else?
            // Make it not an else statement? Once the variable is true it breaks out of the loop.
            var char = letArr[i].char;    // not sure this is going to change the actual letter.char. Return value to that index?
        //    console.log("char under letter.guesschecker. should be equal to letArr[i]: " + char); returns the character
            if (char === guess) {
                letArr[i].guessed = true;
                guessRight = true;
               break;
            }else{
            //    letArr[i].guessed = false;
                guessRight = false;
              
            }
           // console.log("letArr[i].char from letter.guesschecker: " + letArr[i].char);
           // console.log("letArr[i].guessed from letter.guesschecker: " + letArr[i].guessed);
        }
        
        return guessRight; // wrong return.
    }

}


/* var a = new Letter("a");

console.log(a.char);
console.log(a.guessed);
a.toString(); */

module.exports = Letter;