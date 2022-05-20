import playGame from './index.js';
import getRandomNumber from './random.js';

const findGcd = (firstNumber, secondNumber) => {
  const bigger = (firstNumber > secondNumber) ? firstNumber : secondNumber;
  const smaller = (firstNumber > secondNumber) ? secondNumber : firstNumber;
  if (bigger % smaller === 0) {
    return smaller;
  }
  return findGcd(smaller, bigger % smaller);
};

const generateGcdGame = () => {
  const firstNumber = getRandomNumber(1, 20);
  const secondNumber = getRandomNumber(1, 20);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = findGcd(firstNumber, secondNumber).toString();
  return [question, answer];
};

const startGcdGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  playGame(question, generateGcdGame);
};

export default startGcdGame;
