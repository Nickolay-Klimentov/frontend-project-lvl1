import playGame from '../index.js';
import getRandomNumber from '../random.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrimeGame = () => {
  const question = getRandomNumber(1, 20);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startPrimeGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(question, generatePrimeGame);
};

export default startPrimeGame;
