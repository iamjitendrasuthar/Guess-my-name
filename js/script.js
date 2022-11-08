'use strict';

// document.querySelector('.message').textContent = 'Correct Number!👍';

// document.querySelector('.number').textContent = '10';
// document.querySelector('.score').textContent = '20';

// document.querySelector('.guess').value = '1';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
   document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
       const guess = Number(document.querySelector('.guess').value);
       console.log(guess, typeof guess);

    // when there is no input----------------------------------------
       if(!guess) {
      //   document.querySelector('.message').textContent = '⛔ No number!';
      displayMessage('⛔ No number!');
       }

    //  when player wins-------------------------------------------- 
       else if(guess === secretNumber) {
      //   document.querySelector('.message').textContent = '✅Correct';
      displayMessage( '✅Correct');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
        }
       }

    //  when player wrong-----------------------------------------
      else if(guess !== secretNumber) {
         if(score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈too high' : '📉too low';
           displayMessage(guess > secretNumber ? '📈too high' : '📉too low');
            score--;
            document.querySelector('.score').textContent = score;
            } 
            else {
               //  document.querySelector('.message').textContent = '🤦‍♂️ you lost the game'
           displayMessage('🤦‍♂️ you lost the game');
           document.querySelector('.score').textContent = 0;
            }
           }
      

   //  //  when guess is too high-------------------------------------
   //     else if(guess > secretNumber) {
   //      if(score > 1) {
   //      document.querySelector('.message').textContent = '📈too high';
   //      score--;
   //      document.querySelector('.score').textContent = score;
   //      } 
   //      else {
   //          document.querySelector('.message').textContent = '🤦‍♂️ you lost the game'
   //      }
   //     }

   //  //  when guess is too low---------------------------------------
   //     else if(guess < secretNumber) {
   //     if(score > 1) {
   //      document.querySelector('.message').textContent = '📉too low';
   //      score--;
   //      document.querySelector('.score').textContent = score;
   //      } 
   //      else {
   //          document.querySelector('.message').textContent = '🤦‍♂️ you lost the game';
   //          document.querySelector('.score').textContent = 0;
   //      }
   //  }
});

document.querySelector('.again').addEventListener('click', function() {
score = 20;
secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('body').style.backgroundColor = '#222'; 
document.querySelector('.number').style.width = '15rem';
// document.querySelector('.message').textContent = 'Start guessing...';
displayMessage('Start guessing...');
document.querySelector('.score').textContent = score;
document.querySelector('.guess').value = '';
document.querySelector('.number').textContent = '?';
// document.querySelector('.number').value = secretNumber;
});
