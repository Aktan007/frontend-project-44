import readlineSync from 'readline-sync';
import getRandomNum from './utils.js';
import meeting from './cli.js';

const gameDescription4 = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
};

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const getGamePrime = () => {
  const randomNumber = getRandomNum(1, 100);
  const correctAnsweres = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnsweres];
};

const questionBlockPrime = () => {
  const [question, correctAnswer] = getGamePrime();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }

  console.log('Correct!');
  return true;
};

const gamePrime = () => {
  const userName = meeting();
  gameDescription4();
  let i = 0;
  let result = true;

  while (result && i < 3) {
    result = questionBlockPrime();
    i += 1;
  }

  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default gamePrime;
