import CarService from "./CarService.js";



//PRIVATE
let _carService = new CarService()



function _drawCars() {
  let cars = _carService.Cars
  let template = ``
  cars.forEach(car => {
    template += car.Template
  })
  document.getElementById('lists').innerHTML = template
}
function _drawForm() {
  document.getElementById('form-content').innerHTML = `<form class="row" onsubmit="app.controllers.carController.addCar(event)">
    <div class="form-group col-4">
        <label for="make">Make</label>
        <input type="text" class="form-control" maxlength="12" id="make" name="make" placeholder="Enter Make" required>
    </div>
    <div class="form-group col-4">
        <label for="model">Model</label>
        <input type="text" class="form-control" maxlength="12" id="model" name="model" placeholder="Enter Model"
            required>
    </div>
    <div class="form-group col-4">
        <label for="year">Year</label>
        <input type="number" class="form-control" max="4" id="year" name="year" placeholder="Enter Year"
            required>
    </div>
    <div class="form-group col-4">
        <label for="price">Price</label>
        <input type="number" class="form-control" max="7"id="price" name="price" placeholder="Enter Price"
            required>
    </div>
    <div class="form-group col-4">
        <label for="description">Description</label>
        <input type="text" class="form-control" maxlength="120" id="description" name="description"
            placeholder="Enter Description">
    </div>
    <div class="form-group col-4">
        <label for="imgUrl">Image</label>
        <input type="url" class="form-control" id="imgUrl" name="imgUrl" placeholder="Enter Image Url"
            required>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>`

}


//PUBLIC
export default class CarController {
  constructor() {
    //register subscribers
    _carService.addSubscribers('cars', _drawCars)
    // get data
    _carService.getAllCars()
  }
  renderCars() {
    _drawCars();
    _drawForm();
  }

  addCar(event) {
    event.preventDefault();
    let form = event.target
    let carData = {
      make: form.make.value,
      model: form.model.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value
    }
    _carService.addCar(carData)
    form.reset()
  }

  bid(id) {
    _carService.bid(id)
  }
  delete(id) {
    _carService.delete(id)
  }
}