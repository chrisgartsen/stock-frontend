import Axios from 'axios'

const BASE_URL = process.env.BACKEND_URL

class AuthApi {

  login(email, password) {
    return new Promise((resolve, reject) => {
      Axios.post(BASE_URL + '/login', {email: email, password: password}).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }

}

export default AuthApi