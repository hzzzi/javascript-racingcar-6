import MainController from './MainController.js';

class App {
  async play() {
    const mainController = new MainController();
    await mainController.race();
  }
}

const app = new App();
app.play();

export default App;
