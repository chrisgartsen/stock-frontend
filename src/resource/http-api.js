import Axios from 'axios'

const BASE_URL = process.env.BACKEND_URL
class HttpApi {

  constructor(resource) {
    this.resource = resource
  }

  getUrl() {
    return BASE_URL + '/' + this.resource
  }

  setAuthHeader() {
    Axios.defaults.headers.common['auth'] = localStorage.getItem('token')
  }

  getAll() {
    this.setAuthHeader()
    return new Promise((resolve, reject) => {
      Axios.get(this.getUrl()).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  get(id) {
    this.setAuthHeader()
    return new Promise((resolve, reject) => {
      Axios.get(this.getUrl() + '/' + id).then((response) => {
        resolve(response)
      }).catch((error)=> {
        reject(error)
      })
    })
  }
  
  create(item) {
    this.setAuthHeader()
    return new Promise((resolve, reject) => {
      Axios.post(this.getUrl(), item).then((response) => {
        resolve(response)
      }).catch((error)=> {
        reject(error)
      })
    })
  }
  
  update(item) {
    this.setAuthHeader()
    return new Promise((resolve, reject) => {
      Axios.put(this.getUrl() + '/' + item.id, item).then((response) => {
        resolve(response)
      }).catch((error)=> {
        reject(error)
      })
    })
  }

  delete(id) {
    this.setAuthHeader()
    return new Promise((resolve, reject) => {
      Axios.delete(this.getUrl() + '/' + id).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }

}

export default HttpApi