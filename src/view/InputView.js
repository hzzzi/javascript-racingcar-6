import { Console } from '@woowacourse/mission-utils';
import { GAME_MSG, NEW_LINE } from '../Constants';

const InputView = {
  async readCarName() {
    const input = await Console.readLineAsync(GAME_MSG.INPUT.NAME + NEW_LINE);
    const carNames = input.split(',');

    return carNames;
  },

  async readRoundCount() {
    const input = await Console.readLineAsync(
      GAME_MSG.INPUT.ROUND_COUNT + NEW_LINE,
    );
    return input;
  },
};

export default InputView;
