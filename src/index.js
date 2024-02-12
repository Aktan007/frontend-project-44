import readlineSync from 'readline-sync';

const countRounds = 3;

const runGame = (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < countRounds; i += 1) {
    const gameData = getGameData();
    const question = gameData[0];
    const correctAnswer = gameData[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
