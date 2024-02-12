import runGame from './index.js';
import getRandomNum from './utils.js';

const gameDescription4 = 'Answer "yes" if given number is prime. Otherwise answer "no"';

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

const gamePrime = () => runGame(gameDescription4, getGamePrime);

export default gamePrime;
