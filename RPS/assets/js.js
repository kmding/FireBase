// Rock Paper Scissor Logic//
var RPS = ['r', 'p', 's'];
// Declares the tallies to 0 
var pOneScore = 0;
var pTwoScore = 0;
var ties = 0;
// When the user presses the key it records the keypress and then sets it to userguess
$("#challengerOne").onkeyup = function(event) {
  var playerOneGuess = String.fromCharCode(event.keyCode).toLowerCase();
  var playerTwoGuess = String.fromCharCode(event.keyCode).toLowerCase();

  // Making sure the user chooses r, p, or s
  if ((playerOneGuess == 'r') || (playerOneGuess == 'p') || (playerOneGuess == 's')){
    // It tests to determine if the computer or the user won the round and then increments 
    if ((playerOneGuess == 'r') && (playerTwoGuess == 's')){
      playerOneScore++;
    }else if ((playerOneGuess == 'r') && (playerTwoGuess == 'p')){
      pTwoScore++;
    }else if ((playerOneGuess == 's') && (playerTwoGuess == 'r')){
      pTwoScore++;
    }else if ((playerOneGuess == 's') && (playerTwoGuess == 'p')){
      pOneScore++;
    }else if ((playerOneGuess == 'p') && (playerTwoGuess == 'r')){
      pOneScore++;
    }else if ((playerOneGuess == 'p') && (playerTwoGuess == 's')){
      pTwoScore++;
    }else if (playerOneGuess == playerTwoGuess){
      ties++;
    }  
    // Taking the tallies and displaying them in HTML
    // var html = "<p>Press r, p or s to start playing</p>" +
    // "<p>pOneScore: " + 
    // Player One + 
    // "</p>" +
    // "<p>pTwoScore: " + 
    // Player Two + 
    // "</p>" +
    // "<p>ties: " + 
    // ties + 
    // "</p>";
    // Placing the html into the game ID
   // document.querySelector('#game').innerHTML = html;
  }
}
