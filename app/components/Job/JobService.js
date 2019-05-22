import Job from "../../models/Job.js";



//PRIVATE
let _jobApi = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/jobs'
})
let _state = {
  jobs: []
}
let _subscribers = {
  jobs: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}

//PUBLIC
export default class JobService {

  addSubscribers(propName, fn) {
    _subscribers[propName].push(fn)
  }
  get Jobs() {
    return _state.jobs.map(j => new Job(j))
  }
  getAllJobs() {
    _jobApi.get()
      .then(res => {
        let data = res.data.data.map(d => new Job(d))
        _setState('jobs', data)
      })
      .catch(err => {
        console.error(err)
      })
  }
  addJob(jobData) {
    _jobApi.post('', jobData)
      .then(res => {
        this.getAllJobs()
      })
      .catch(err => {
        console.error(err)
      })

  }
  apply(id) {
    let jobToApplyFor = _state.jobs.find(j => j._id == id)
    jobToApplyFor.price++
    _jobApi.put(id, jobToApplyFor)
      .then(res => {
        this.getAllJobs()
      })
  }
  delete(id) {
    _jobApi.delete(id)
      .then(res => {
        this.getAllJobs()
      })
  }
}