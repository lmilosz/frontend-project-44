import runGameLogic from '../gameLogic.js';
import generateRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';

const getProgression = (startFromNumber, stepOfProgression) => {
  const progression = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startFromNumber + stepOfProgression * i);
  } return progression;
};

const startRound = () => {
  const firstNumber = generateRandomNumber(0, 50);
  const step = generateRandomNumber(2, 8);
  const progression = getProgression(firstNumber, step);
  const randomIndex = generateRandomNumber(0, 9);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, correctAnswer];
};

const runProgression = () => runGameLogic(rules, startRound);
export default runProgression;
