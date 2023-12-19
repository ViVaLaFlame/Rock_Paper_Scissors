import readlineSync from 'readline-sync';

let playerName = readlineSync.question('Hi, what is your name? ');
console.log(`Let's play, ${playerName}`);
let playerCorrect = 0;
let computerCorrect = 0;
const roundsResults = [];

while (playerCorrect < 3 && computerCorrect < 3) {
  const playerAnswer = readlineSync.question('Choose: rock, paper, or scissors: ').toLowerCase();
  const computerVariants = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

  console.log(`Computer chose: ${computerVariants}`);

  let roundResult;

  if ((playerAnswer === 'rock' && computerVariants === 'scissors') ||
      (playerAnswer === 'paper' && computerVariants === 'rock') ||
      (playerAnswer === 'scissors' && computerVariants === 'paper')) {

    console.log('You win this round!');

    playerCorrect += 1;
    roundResult = `${playerName} wins`;

  } else if ((playerAnswer === 'rock' && computerVariants === 'paper') ||
             (playerAnswer === 'paper' && computerVariants === 'scissors') ||
             (playerAnswer === 'scissors' && computerVariants === 'rock')) {

    console.log('Computer wins this round!');

    computerCorrect += 1;
    roundResult = 'Computer wins';

  } else {
    console.log('It\'s a tie this round!');
    roundResult = 'Tie';
  }

  roundsResults.push(roundResult);
  console.log(`Score: ${playerName} ${playerCorrect} - ${computerCorrect} Computer\n`);
}

console.log('\nResults of each round:');
roundsResults.forEach((result, index) => {
  console.log(`Round ${index + 1}: ${result}`);
});

if (playerCorrect === 3) {
  console.log(`\n${playerName}, you won the game!`);
} else {
  console.log('\nComputer won the game!');
}
