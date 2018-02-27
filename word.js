
var Letter = require('./letter.js');

var hangman;

function Hangman(){
  this.words =["Bob Dylan", "Neil young","America", "Willie Nelson"];
  this.randWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 5;
  this.messages = {
    win:"You won!",
    loose: "You lose!",
    guessed:"Letter used",
    notValid:"Enter a letter",
  };
}

hangman.prototype.getWord = function () {
  [Math.floor(Math.random()*this.words.length]

};
