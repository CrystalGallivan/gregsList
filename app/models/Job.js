export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description || 'No Description Provided'
  }
  get Template() {
    return ` 
    <div class="col-3" id="">
    <div class="card">
    <h1 class="card-title">${this.company}</h1>
    <div class="card-body">
    <h5 class="card-title">${this.jobTitle} - ${this.rate}</h5>
    <h5 class="card-title">$${this.hours}</h5>
    <p class="card-text">${this.description}</p>
    <button class="btn btn-primary" onclick="app.controllers.carControllers.apply('${this._id}')">Apply</button>
     <button class="btn btn-danger" onclick="app.controllers.carControllers.delete('${this._id}')">Delete</button>
    </div>
    </div>
    </div>`
  }
}