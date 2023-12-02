import MainController from './MainController.js';

class App {
  async play() {
    const mainController = new MainController();

    await mainController.setGame();

    mainController.race();

    mainController.showWinners();
  }
}

export default App;
