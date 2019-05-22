import JobService from "./JobService.js";



//PRIVATE
let _jobService = new JobService()



function _drawJobs() {
  let jobs = _jobService.Jobs
  let template = ``
  jobs.forEach(job => {
    template += job.Template
  })

  document.getElementById('lists').innerHTML = template
}
function _drawForm() {
  document.getElementById('form-content').innerHTML = `<form class="row" onsubmit="app.controllers.carController.addJob(event)">
    <div class="form-group col-4">
        <label for="company">Company</label>
        <input type="text" class="form-control" id="company" name="company" placeholder="Enter Company" required>
    </div>
    <div class="form-group col-4">
        <label for="jobTitle">Job Title</label>
        <input type="text" class="form-control" id="jobTitle" name="jobTitle" placeholder="Enter Job Title"
            required>
    </div>
    <div class="form-group col-4">
        <label for="hours">Hours</label>
        <input type="number" class="form-control" id="hours" name="hours" placeholder="Enter Hours"
            required>
    </div>
    <div class="form-group col-4">
        <label for="rate">Rate</label>
        <input type="number" class="form-control" id="rate" name="rate" placeholder="Enter Rate"
            required>
    </div>
    <div class="form-group col-4">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" name="description"
            placeholder="Enter Description">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>`

}


//PUBLIC
export default class JobController {
  constructor() {
    //register subscribers
    _jobService.addSubscribers('jobs', _drawJobs)
    // get data
    _jobService.getAllJobs()
  }
  renderJobs() {
    _drawJobs();
    _drawForm();
  }

  addJob(event) {
    event.preventDefault();
    let form = event.target
    let jobData = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    _jobService.addJob(jobData)
    form.reset()
  }

  apply(id) {
    _jobService.apply(id)
  }
  delete(id) {
    _jobService.delete(id)
  }
}