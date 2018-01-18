import Axios from 'axios'

const BASE_URL = 'http://localhost:3000/'

class HttpApi {

  constructor(resource) {
    this.resource = resource
  }

  getUrl() {
    return BASE_URL + this.resource
  }

  getAll() {
    return new Promise((resolve, reject) => {
      Axios.get(this.getUrl()).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  delete(id) {
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