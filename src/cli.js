import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to The Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greeting;
