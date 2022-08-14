let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}
function compareGuesses(humanGuess, computerGuess, targetGuess) {
let humanDiff = Math.abs(humanGuess-targetGuess);
let computerDiff = Math.abs(computerGuess - targetGuess);
  if (humanDiff < computerDiff) {
    return true;
  } else if (computerDiff < humanDiff) {
    return false;
  } else {
    return true;
  }
}
function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}
function advanceRound() {
  currentRoundNumber = currentRoundNumber + 1;
}
function getAbsoluteDistance(x,y) {
  return Math.abs(x-y);
}
function alert() {
  if (humanGuess < 0 || humanGuess > 9) {
    return 'Invalid!';
  }
}
console.log(generateTarget());
console.log(getAbsoluteDistance(9,3));