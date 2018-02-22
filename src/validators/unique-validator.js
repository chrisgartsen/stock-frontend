import { withParams } from 'vuelidate/lib'
import store from '@/store/index'

export default withParams({ type: 'unique' }, (email) => {
    if(email === '') return true // do not check empty values for uniqueness
    let users = store.getters.getUsers
    
    let index = checkList.map(function(user) { return user.email}).indexOf(email)
    return index == -1
  })