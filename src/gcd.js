import readlineSync from 'readline-sync';
import getRandomNum from './utils.js';
import meeting from './cli.js';

const gameDescription2 = () => {
  'Find the greatest common divisor of given numbers.';
};

const getGcd = (firstValue, secondValue) => {
  if (!secondValue) {
    return firstValue;
  }
  return getGcd(secondValue, firstValue % secondValue);
};

const getGame = () => {
  const num1 = getRandomNum(100);
  const num2 = getRandomNum(100);
  const question1 = `${num1} ${num2}`;
  const correctAns = getGcd(num1, num2).toString();

  return [question1, correctAns];
};

const questionBlockGCD = () => {
  const [question, correctAnswer] = getGame();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }

  console.log('Correct!');
  return true;
};

const gameGCD = () => {
  const userName = meeting();
  gameDescription2();
  let i = 0;
  let result = true;

  while (result && i < 3) {
    result = questionBlockGCD();
    i += 1;
  }

  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default gameGCD;
