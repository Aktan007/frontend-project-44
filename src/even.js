import runGame from './index.js';
import getRandomNum from './utils.js';

const gameDescription6 = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const randomNumber = getRandomNum(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGame = () => runGame(gameDescription6, getGameData);

export default startGame;
