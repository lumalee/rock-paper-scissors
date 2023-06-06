let userScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
const winningConditions = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};

// DOM elements
const buttons = {
  rock: document.querySelector('#rock'),
  paper: document.querySelector('#paper'),
  scissors: document.querySelector('#scissors')
};
const userScoreDisplay = document.querySelector('#user-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const messageDisplay = document.querySelector('#message');
const winnerDisplay = document.querySelector('#winner');

// Event listeners
buttons.rock.addEventListener('click', () => playRound('rock'));
buttons.paper.addEventListener('click', () => playRound('paper'));
buttons.scissors.addEventListener('click', () => playRound('scissors'));
winnerDisplay.addEventListener('click', () => playAgain());

// Play a round
function playRound(userChoice) {
  const computerChoice = getRandomChoice();
  const winner = getRoundWinner(userChoice, computerChoice);

  updateScores(winner);
  updateDisplays(userChoice, computerChoice, winner);

  if (userScore === 5 || computerScore === 5) {
    endGame();
  }
}

// Generate a random choice for the computer
function getRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Determine the winner of a round
function getRoundWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (winningConditions[userChoice] === computerChoice) {
    return 'user';
  } else {
    return 'computer';
  }
}

// Update scores based on the round winner
function updateScores(winner) {
  if (winner === 'user') {
    userScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

// Update score displays and winner message
function updateDisplays(userChoice, computerChoice, winner) {
  userScoreDisplay.textContent = userScore;
  computerScoreDisplay.textContent = computerScore;
  if (winner === 'tie') {
    messageDisplay.textContent = `You both chose ${userChoice}. It\'s a tie!`;
  } else if (winner === 'user') {
    messageDisplay.textContent = `${userChoice} beats ${computerChoice}. You win!`;
  } else {
    messageDisplay.textContent = `${computerChoice} beats ${userChoice}. You lose!`;
  }
}

// End the game and determine winner
function endGame() {
  const declareWinner = userScore === 5 ? 'You win!' : 'Computer wins!';
  winner.textContent = declareWinner;
  document.querySelectorAll('main, div').forEach(element => element.style.display = 'none');
}

// Refresh page to play again
function playAgain() {
  location.reload();
}