function guessingGame() {
    let secretNumber = Math.floor(Math.random() * 100);
    let numGuesses = 0;
    let gameOver = false;
  
    return function(guess) {
      if (gameOver) {
        return "You already won!";
      }
  
      numGuesses++;
  
      if (guess === secretNumber) {
        gameOver = true;
        const message = `You win! You found ${secretNumber}`;
        secretNumber = Math.floor(Math.random() * 100); 
        return message;
      } else if (guess < secretNumber) {
        return `${guess} is too low!`;
      } else {
        return `${guess} is too high!`;
      }
    };
  }
  

module.exports = { guessingGame };
