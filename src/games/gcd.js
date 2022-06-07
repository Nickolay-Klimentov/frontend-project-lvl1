import playGame from '../index.js';
import getRandomNumber from '../random.js';

const findGcd = (firstNumber, secondNumber) => {
  const bigger = Math.max(firstNumber, secondNumber);
  const smaller = Math.min(firstNumber, secondNumber);
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
  const rule = 'Find the greatest common divisor of given numbers.';
  playGame(rule, generateGcdGame);
};

export default startGcdGame;
