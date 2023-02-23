 const prompt = require('prompt-sync')();

const ans = "word"

function guessGame(){
    let guess = prompt("Please enter your guess, the answer has 4 letters: ");
    if(guess === ans){
        console.log("Amazing! You got it right!");
        return '';
    }else{
        let tryAgain = prompt("Unlucky! That's not the answer. Enter 'N' to exit or anything else to try again: ");
        if(tryAgain === "N"){
            console.log("Thanks for playing, Bye now!");
            return '';
        }else{
            guessGame();
        }
    }

}

guessGame();

module.exports = guessGame;