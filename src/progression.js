import getRandomNum from './utils.js';
import runGame from './index.js';

const gameDescription7 = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const getGameData7 = () => {
  const start = getRandomNum(0, 5);
  const step = getRandomNum(1, 5);
  const length = getRandomNum(10, 15);
  const progression = getProgression(start, step, length);
  const hiddenNumber = getRandomNum(0, progression.length - 1);
  const correctAnswer = progression[hiddenNumber].toString();
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription7, getGameData7);

export default startGame;
