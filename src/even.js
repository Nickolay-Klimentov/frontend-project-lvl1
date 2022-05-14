import playEvenGame from './index.js';
import getRandomNumber from './random.js';

const isEven = (number) => number % 2 === 0;

const generateEvenGame = () => {
  const question = getRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEvenGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  playEvenGame(question, generateEvenGame);
};

export default startEvenGame;