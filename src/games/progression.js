import playGame from '../index.js';
import getRandomNumber from '../random.js';

const makeProgression = (progressionStart, step, length) => {
  const progression = [];
  let progressionItem = progressionStart;
  for (let i = 0; i < length; i += 1) {
    progression[i] = progressionItem;
    progressionItem += step;
  }
  return progression;
};

const generateProgressionGame = () => {
  const progressionStart = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 5);
  const length = 10;
  const progression = makeProgression(progressionStart, step, length);
  const dividedProgression = progression.slice();
  const randomIndex = getRandomNumber(0, progression.length-1);
  dividedProgression[randomIndex] = '..';
  const question = dividedProgression.join(' ');
  const answer = progression[randomIndex].toString();
  return [question, answer];
};

const startProgressionGame = () => {
  const rule = 'What number is missing in the progression?';
  playGame(rule, generateProgressionGame);
};

export default startProgressionGame;
