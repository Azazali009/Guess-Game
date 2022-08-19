'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('💔 not a number');
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('👌 Correct number');
    displayScore(score);
    document.querySelector('body').style.backgroundColor = '#38d9a9';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.number').style.color = 'green';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');

      score--;
      displayScore(score);
    } else {
      displayMessage('💔 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '8rem';
  document.querySelector('.guess').value = '';
  displayScore(score);
  displayMessage('😎 Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
});
