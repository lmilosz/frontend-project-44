import getRandomNumber from '../utils.js';
import runGameLogic from '../gameLogic.js';

const rules = 'What is the result of the expression?';

const calculate = (num1, randOperator, num2) => {
  let calculatedAnswer = '';
  switch (randOperator) {
    case '+':
      calculatedAnswer = num1 + num2;
      break;
    case '-':
      calculatedAnswer = num1 - num2;
      break;
    case '*':
      calculatedAnswer = num1 * num2;
      break;
    default:
      break;
  }
  return calculatedAnswer;
};

const startRound = () => {
  const operators = ['+', '-', '*'];
  const randomOperatorIndex = operators[getRandomNumber(0, operators.length - 1)];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `Question: ${number1} ${randomOperatorIndex} ${number2}`;
  const correctAnswer = String(calculate(number1, randomOperatorIndex, number2));
  return [question, correctAnswer];
};

const runCalcGame = () => runGameLogic(rules, startRound);

export default runCalcGame;
