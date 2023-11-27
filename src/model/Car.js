import { MissionUtils } from '@woowacourse/mission-utils';
import { CONDITION } from '../Constants';

class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }
}

export default Car;
