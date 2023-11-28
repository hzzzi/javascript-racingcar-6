import carNameValidator from './validator/carName.js';
import roundCountValidator from './validator/roundCount.js';
import InputView from './view/InputView.js';
import Car from './model/Car.js';
import OutputView from './view/OutputView.js';

class MainController {
  #cars;

  #roundCount;

  constructor() {
    this.#cars = [];
    this.#roundCount = 0;
  }

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
    this.#roundCount = roundCount;
  }

  playOneRound() {
    this.#cars.forEach((car) => {
      car.forwardOrStop();
      OutputView.printMoveResult(car);
    });
  }

  calcWinner() {
    let winners = [];
    let winnerPosition = 0;

    this.#cars.forEach((car) => {
      if (winnerPosition < car.Position) {
        winnerPosition = car.Position;
        winners = [car.name];
      } else if (winnerPosition === car.Position) {
        winners.push(car.name);
      }
    });
    return winners;
  }

  async race() {
    await this.setGame();

    OutputView.printRoundResult();

    for (let i = 0; i < this.#roundCount; i += 1) {
      this.playOneRound();
    }

    const winners = this.calcWinner();
    OutputView.printWinner(winners);
  }
}

export default MainController;
