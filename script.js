'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');


function game() {
  let currScore, scores, winningScore, activePlayer;
  
const init = () => {
  currScore = 0;
  scores = [0, 0]
  winningScore = 100;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  current0El.textContent = 0
  current1El.textContent = 0
  diceEl.classList.add('hidden');
}

init();

const togglePlayer = () => {
  currScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = currScore;
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
}

const handleScore = () => {
  diceEl.classList.remove('hidden');
  const roll = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${roll}.png`;
  if (roll !== 1) {
    currScore += roll;
    document.querySelector(`#current--${activePlayer}`).textContent = currScore;
  } else if (roll === 1) {
    togglePlayer();
  }
  
}


const handleAddScore = () => {
  scores[activePlayer] += currScore;
  document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
  if (scores[activePlayer] >= winningScore) {
    btnRoll.removeEventListener('click', handleScore);
    btnHold.removeEventListener('click', handleAddScore);
    player0El.classList.remove('player--active')
    player1El.classList.remove('player--active')
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  } else {
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    togglePlayer();
  }
}

btnRoll.addEventListener('click', handleScore);
btnHold.addEventListener('click', handleAddScore);
btnNew.addEventListener('click', game);
}

game();

// let scores, currentScore, activePlayer, playing;

// function gameInitial() {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   diceEl.classList.add('hidden');
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;
//   playing = true;

//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');

//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
// }
// gameInitial();

// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     if (dice !== 1) {
//       currentScore += dice;
//       document.querySelector(`#current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     scores[activePlayer] += currentScore;
//     document.querySelector(`#score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     if (scores[activePlayer] >= 50) {
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//       diceEl.classList.add('hidden');
//     } else {
//       switchPlayer();
//     }
//   }
// });

// function switchPlayer() {
//   document.querySelector(`#current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// }

// btnNew.addEventListener('click', gameInitial);
