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
    <div class="card" id="jobCard">
    <h1 class="card-title" id='job-card'>${this.company}</h1>
    <div class="card-body" id='job-card'>
    <h5 class="card-title" id='job-card'>${this.jobTitle} - ${this.rate}</h5>
    <h5 class="card-title" id='job-card'>$${this.hours}</h5>
    <p class="card-text" id='job-card'>${this.description}</p>
    <button class="btn btn-primary" onclick="app.controllers.jobController.apply('${this._id}')">Apply</button>
     <button class="btn btn-danger" onclick="app.controllers.jobController.delete('${this._id}')">Delete</button>
    </div>
    </div>
    </div>`
  }
}