import playGame from '../index.js';
import getRandomNumber from '../random.js';

const signs = ['+', '-', '*'];
const calcMathOperations = (a, sign, b) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw Error('Wrong sign!');
  }
};

const generateCalcGame = () => {
  const firstNumber = getRandomNumber(1, 20);
  const secondNumber = getRandomNumber(1, 20);
  const sign = signs[getRandomNumber(0, signs.length - 1)];
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = calcMathOperations(firstNumber, sign, secondNumber).toString();
  return [question, answer];
};
/* Прошлое решение
  const operations = [['+', (a, b) => a + b], ['-', (a, b) => a - b], ['*', (a, b) => a * b]];
  const firstNumber = getRandomNumber(1, 20);
  const secondNumber = getRandomNumber(1, 20);
  const signIndex = getRandomNumber(0, operations.length);
  const [sign, operation] = operations[signIndex];
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = operation(firstNumber, secondNumber).toString();
  return [question, answer];
*/
const startCalcGame = () => {
  const rule = 'What is the result of the expression?';
  playGame(rule, generateCalcGame);
};

export default startCalcGame;
