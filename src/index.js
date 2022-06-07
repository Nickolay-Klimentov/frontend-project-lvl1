import readlineSync from 'readline-sync';

const playGame = (question, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);

  const winAnswersCount = 3;
  for (let correctAnswerCount = 0; correctAnswerCount < winAnswersCount; correctAnswerCount += 1) {
    const [roundQuestion, correctAnswer] = generateRoundData();
    console.log(`Question: ${roundQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
