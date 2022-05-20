import playGame from './index.js';
import getRandomNumber from './random.js';

const generateCalcGame = () => {
  const operations = [['+', (a, b) => a + b], ['-', (a, b) => a - b], ['*', (a, b) => a * b]];
  const firstNumber = getRandomNumber(1, 20);
  const secondNumber = getRandomNumber(1, 20);
  const signIndex = getRandomNumber(0, operations.length);
  const [sign, operation] = operations[signIndex];
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = operation(firstNumber, secondNumber).toString();
  return [question, answer];
};

const startCalcGame = () => {
  const question = 'What is the result of the expression?';
  playGame(question, generateCalcGame);
};

export default startCalcGame;
