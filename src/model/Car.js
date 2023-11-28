import { MissionUtils } from '@woowacourse/mission-utils';
import { CONDITION } from '../Constants';

class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  get Position() {
    return this.#position;
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(
      CONDITION.NUMBER_RANGE.FROM,
      CONDITION.NUMBER_RANGE.TO,
    );
  }

  forwardOrStop() {
    if (this.makeRandomNumber() >= CONDITION.FORWARD_STANDARD) {
      this.#position += CONDITION.GO_FORWARD;
    }
  }
}

export default Car;
