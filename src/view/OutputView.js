import { Console } from '@woowacourse/mission-utils';
import { GAME_MSG } from '../Constants';

const OutputView = {
  printRoundResult() {
    Console.print(GAME_MSG.OUTPUT.ROUND_RESULT);
  },

  printMoveResult(car) {
    Console.print(`${car.name} : ${GAME_MSG.OUTPUT.DASH.repeat(car.position)}`);
  },

  printWinner() {
    Console.print(GAME_MSG.OUTPUT.WINNER);
  },
};

export default OutputView;
