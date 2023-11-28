import { Console } from '@woowacourse/mission-utils';
import { GAME_MSG, NEW_LINE } from '../Constants.js';

const OutputView = {
  printRoundResult() {
    Console.print(NEW_LINE + GAME_MSG.OUTPUT.ROUND_RESULT);
  },

  printMoveResult(car) {
    Console.print(`${car.name} : ${GAME_MSG.OUTPUT.DASH.repeat(car.position)}`);
  },

  printNewLine() {
    Console.print('');
  },

  printWinner(winners) {
    Console.print(GAME_MSG.OUTPUT.WINNER + winners);
  },
};

export default OutputView;
