import getRandomNum from './utils.js';
import runGame from './index.js';

const gameDescription8 = 'What is the result of the expression?';

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

const getGameData8 = () => {
  const number1 = getRandomNum(1, 20);
  const number2 = getRandomNum(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculateAnswer(number1, number2, operator).toString();

  return [question, correctAnswer];
};

const startCalc = () => runGame(gameDescription8, getGameData8);

export default startCalc;
