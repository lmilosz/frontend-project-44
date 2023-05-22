import runGameLogic from '../gameLogic.js';

import generateRandomNumber from '../utils.js'

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startRound = () => {
  const randomNumber = generateRandomNumber();
  const question = `Question: ${randomNumber}`;
  const correctAnswer = (isEven(randomNumber) ? 'yes' : 'no');
  return [question, correctAnswer];
};

const runEvenGame = () => runGameLogic(rule, startRound);

export default runEvenGame;