import runGameLogic from '../gameLogic.js';

import generateRandomNumber from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const startRound = () => {
  const randomNumber = generateRandomNumber(2, 100);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = (isPrime(randomNumber) ? 'yes' : 'no');
  return [question, correctAnswer];
};
const runPrimeGame = () => runGameLogic(rule, startRound);

export default runPrimeGame;
