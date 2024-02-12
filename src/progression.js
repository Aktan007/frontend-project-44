import readlineSync from 'readline-sync';
import getRandomNum from './utils.js';
import meeting from './cli.js';

const gameDescription3 = () => {
  console.log('What number is missing in the progression?');
};

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const getGame1 = () => {
  const start = getRandomNum(0, 5);
  const step = getRandomNum(1, 5);
  const length = getRandomNum(10, 15);
  const progression = getProgression(start, step, length);
  const hiddenNumber = getRandomNum(0, progression.length - 1);
  const correctAn = progression[hiddenNumber].toString();
  progression[hiddenNumber] = '..';
  const question2 = progression.join(' ');

  return [question2, correctAn];
};

const questionBlockProgression = () => {
  const [question, correctAnswer] = getGame1();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }

  console.log('Correct!');
  return true;
};

const gameProgression = () => {
  const userName = meeting();
  gameDescription3();
  let i = 0;
  let result = true;

  while (result && i < 3) {
    result = questionBlockProgression();
    i += 1;
  }

  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default gameProgression;
