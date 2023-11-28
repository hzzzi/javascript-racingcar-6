import { Console } from '@woowacourse/mission-utils';
import { GAME_MSG } from '../Constants.js';

const OutputView = {
  printRoundResult() {
    Console.print(GAME_MSG.OUTPUT.ROUND_RESULT);
  },

  printMoveResult(car) {
    Console.print(`${car.name} : ${GAME_MSG.OUTPUT.DASH.repeat(car.position)}`);
  },

  printWinner(winners) {
    Console.print(GAME_MSG.OUTPUT.WINNER + winners);
  },
};

export default OutputView;
