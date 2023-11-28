import MainController from './MainController.js';

class App {
  async play() {
    const mainController = new MainController();
    await mainController.race();
  }
}

export default App;
