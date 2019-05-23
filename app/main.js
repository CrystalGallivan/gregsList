import CarController from "./components/Car/CarController.js";
import JobController from "./components/Job/JobController.js";
import PropertyController from "./components/Property/PropertyController.js";

class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      jobController: new JobController(),
      propertyController: new PropertyController()
    }
  }
}


window['app'] = new App()