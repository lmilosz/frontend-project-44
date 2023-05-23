import runGameLogic from '../gameLogic.js';
import generateRandomNumber from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 > num1) return getGcd(num2, num1);
  if (!num2) return num1;
  return getGcd(num2, num1 % num2);
};

const startRound = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const question = `Question: ${number1} ${number2}`;
  const trueAnswer = String(getGcd(number1, number2));
  return [question, trueAnswer];
};

const runGcd = () => {
  runGameLogic(rules, startRound);
};

export default runGcd;
