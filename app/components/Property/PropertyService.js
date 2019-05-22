


//PRIVATE
let _propertyApi = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/cars'
})
let _state = {
  property: []
}
let _subscribers = {
  property: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}

//PUBLIC
export default class PropertyService {
  constructor() {
  }
  addSubscribers(propName, fn) {
    _subscribers[propName].push(fn)
  }

}