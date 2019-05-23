export default class Property {
  constructor(data) {
    this._id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.description = data.description || 'No Description Provided'
  }
  get Template() {
    return `
    <div class="col-3" id="">
    <div class="card">
    <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${this.bedrooms} - ${this.bathrooms} - ${this.levels} - ${this.year}</h5>
    <h5 class="card-title">$${this.price.toFixed(2)}</h5>
    <p class="card-text">${this.description}</p>
    <button class="btn btn-primary" onclick="app.controllers.propertyController.bid('${this._id}')">Bid</button>
     <button class="btn btn-danger" onclick="app.controllers.propertyController.delete('${this._id}')">Delete</button>
    </div>
    </div>
    </div>   
    `
  }
}