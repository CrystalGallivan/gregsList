import CarController from "./components/Car/CarController.js";
import JobController from "./components/Job/JobController.js";

class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      jobController: new JobController()
    }
  }
}


window['app'] = new App()