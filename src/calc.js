import readlineSync from 'readline-sync';
import getRandomNum from './utils.js';
import meeting from './cli.js';

const gameDescription = () => {
  console.log('What is the result of the expression?');
};

const calculateAnswer = (firstValue, secondValue, operator) => {
  let result = null;

  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    default:
  }

  return result;
};

const getGameData = () => {
  const number1 = getRandomNum(20);
  const number2 = getRandomNum(20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculateAnswer(number1, number2, operator).toString();

  return [question, correctAnswer];
};

const questionBlockCalc = () => {
  const [question, correctAnswer] = getGameData();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }

  console.log('Correct!');
  return true;
};

const startGame = () => {
  const userName = meeting();
  gameDescription();
  let i = 0;
  let result = true;

  while (result && i < 3) {
    result = questionBlockCalc();
    i += 1;
  }

  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default startGame;
