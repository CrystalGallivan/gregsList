import PropertyService from "./PropertyService.js";



//PRIVATE
let _propertyService = new PropertyService()



function _drawProperty() {
  // var = get Properties which lives on the PropertyService page
  let properties = _propertyService.Properties
  let template = ``
  properties.forEach(property => {
    template += property.Template
  });
  document.getElementById('lists').innerHTML = template
}
function _drawForm() {
  document.getElementById('form-content').innerHTML = `
  <form class="row" onsubmit="app.controllers.propertyController.addProperty(event)">
    <div class="form-group col-4">
        <label for="bedrooms">Bedrooms</label>
        <input type="number" class="form-control" id="bedrooms" name="bedrooms" placeholder="Enter Bedrooms" required>
    </div>
    <div class="form-group col-4">
        <label for="bathrooms">Bathrooms</label>
        <input type="number" class="form-control" id="bathrooms" name="bathrooms" placeholder="Enter Bathrooms"
            required>
    </div>
    <div class="form-group col-4">
        <label for="levels">Levels</label>
        <input type="number" class="form-control" id="levels" name="levels" placeholder="Enter Levels"
            required>
    </div>
<div class="form-group col-4">
        <label for="year">Year</label>
        <input type="number" class="form-control" id="year" name="year" placeholder="Enter Year"
            required>
    </div>
    <div class="form-group col-4">
        <label for="price">Price</label>
        <input type="number" class="form-control" id="price" name="price" placeholder="Enter Price"
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
</form>  
  `
}


//PUBLIC
export default class PropertyController {
  constructor() {
    //register subscribers
    _propertyService.addSubscribers('properties', _drawProperty)

    //get data
    _propertyService.getAllProperties()
  }
  renderProperties() {
    _drawProperty();
    _drawForm();
  }
  addProperty(event) {
    event.preventDefault();
    let form = event.target
    let propData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      year: form.year.value,
      imgUrl: form.imgUrl.value,
      price: form.price.value,
      description: form.description.value
    }
    _propertyService.addProperty(propData)
    form.reset()
  }
  bid(id) {
    _propertyService.bid(id)
  }
  delete(id) {
    _propertyService.delete(id)
  }
}