'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const changeColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const changeWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
document.querySelector('.check').addEventListener('click', function () {
  const theGuess = Number(document.querySelector('.guess').value);
  console.log(theGuess, typeof theGuess);
  if (!theGuess) {
    displayMessage('Please enter a number 🙁');
  } else if (theGuess === secretNumber) {
    displayMessage('🎉 Correct Number 🎉');
    displayNumber(secretNumber);
    changeColor('#60b347');
    changeWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.getElementById('ck').disabled = true;
  } else if (theGuess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        theGuess > secretNumber ? '📈 TOO Hight 📈' : '📉 TOO Low 📉'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('You Lost 😢');
      displayScore(0);
      changeColor('red');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  changeColor('#222');
  changeWidth('15rem');
  document.getElementById('ck').disabled = false;
});
