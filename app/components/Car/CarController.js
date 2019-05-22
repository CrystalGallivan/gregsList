import CarService from "./CarService.js";



//PRIVATE
let _carService = new CarService()



function _drawCars() {
  let cars = _carService.Cars
  console.log(cars)
  // template = ``
  // for (let i = 0; i < cars.length; i++) {
  //   const element = cars[i];

  // }

}


//PUBLIC
export default class CarController {
  constructor() {
    //register subscribers
    _carService.addSubscribers('cars', _drawCars)
    // get data
    _carService.getAllCars()
  }
  addCar(event) {
    event.preventDefault();
    console.log('you should write this at some point')
  }
}