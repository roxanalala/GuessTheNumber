'use strict';
/*
console.log(document.querySelector('.message').textContent);
  document.querySelector('.message').textContent = '🎉Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const backround = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const highscore = function (score1, highscore1) {
  if (score1 > highscore1) {
    highscore1 = score1;
  }
  return highscore1;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('🆘No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    displayNumber(secretNumber);
    backround('#00ff0080');

    document.querySelector('.number').style.width = '30rem';
    highScore = highscore(score, highScore);
    document.querySelector('.highscore').textContent = highScore;
    // if (score > highScore) {
    //  highScore = score;
    // document.querySelector('.highscore').textContent = highScore;
    //}
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👅You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;

  displayMessage('Start guessing...');
  backround('rgb(99, 82, 99)');

  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
});
