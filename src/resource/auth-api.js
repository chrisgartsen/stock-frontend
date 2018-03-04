import Axios from 'axios'

const BASE_URL = 'http://localhost:3000'

//'https://boiling-dawn-28052.herokuapp.com'

class AuthApi {

  constructor() {

  }  

  login(email, password) {
    return new Promise((resolve, reject) => {
      Axios.post(BASE_URL + '/login', {email: email, password: password}).then((response) => {
        console.log("RESOLVING")
        resolve(response)
      }).catch((error) => {
        console.log("REJECTING")
        reject(error)
      })
    })
  }

}

export default AuthApi