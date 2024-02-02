import readlineSync from 'readline-sync';

const meeting = () => {
  console.log('Welcome to the Brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

const starting = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

const getRandomNum = (n = 10) => {
  const num = Math.random() * n;
  return Math.ceil(num);
}

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
    return false
  }
  console.log('Correct!');
  return true;
};


 const game = () => {
  const userName = meeting();
  starting();
  let i = 1;
  let result = true;
  do { meeting();
    starting();
    questionBlock();w
    result = questionBlock();
    i++
  } while (result && i < 4);
  if (result == true && i == 4) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  console.log(`'Let's try again, ${userName}!'`);
  return false;
 };

export default  game ;
