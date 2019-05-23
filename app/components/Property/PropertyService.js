import Property from "../../models/Property.js";



//PRIVATE
let _propertyApi = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/houses'
})
let _state = {
  properties: []
}
let _subscribers = {
  properties: []
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
  get Properties() {
    return _state.properties.map(p => new Property(p))
  }

  getAllProperties() {
    _propertyApi.get()
      .then(res => {
        let data = res.data.data.map(d => new Property(d))
        _setState('properties', data)
      })
      .catch(err => {
        console.error(err)
      })
  }
  addProperty(propData) {
    _propertyApi.post('', propData)
      .then(res => {
        this.getAllProperties()
      })
      .catch(err => {
        console.error(err)
      })
  }
  bid(id) {
    let propToBidOn = _state.properties.find(p => p._id == id)
    propToBidOn.price++
    _propertyApi.put(id, propToBidOn)
      .then(res => {
        this.getAllProperties()
      })
  }
  delete(id) {
    _propertyApi.delete(id)
      .then(res => {
        this.getAllProperties()
      })
  }

}