import carNameValidator from './validator/carName.js';
import roundCountValidator from './validator/roundCount.js';
import InputView from './view/InputView.js';
import Car from './model/Car.js';

class MainController {
  #cars;

  #roundCount;

  createCars(carNames) {
    carNames.forEach((name) => {
      this.#cars.push(new Car(name));
    });
  }

  async setGame() {
    const carNames = await InputView.readCarName();
    carNameValidator.validateCarName(carNames);

    this.createCars(carNames);

    const roundCount = await InputView.readRoundCount();
    roundCountValidator.validateRoundCount(roundCount);
  }
}

export default MainController;
