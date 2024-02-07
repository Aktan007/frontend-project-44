import readlineSync from 'readline-sync';
import meeting from './index.js';

const starting = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const getRandomNum = (n = 10) => {
  const num = Math.random() * n;
  return Math.ceil(num);
};

const questionBlock = () => {
  const number = getRandomNum(20);
  console.log(`Question: ${number}`);
  let expectedAnswer = '';
  if (number % 2 === 0) {
    expectedAnswer = 'yes';
  } else {
    expectedAnswer = 'no';
  }
  const userAnswer = readlineSync.question('Your answer: ');
  if (expectedAnswer !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const game = () => {
  const userName = meeting();
  starting();
  let i = 0;
  let result = true;

  while (result && i < 3) {
    result = questionBlock();
    i += 1;
  }

  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default game;
