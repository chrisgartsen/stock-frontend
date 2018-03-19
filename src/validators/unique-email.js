import { withParams } from 'vuelidate/lib'
import Axios from 'axios'
import AuthApi from '@/resource/auth-api'

export default withParams({ type: 'unique' }, (value) => {
    if(value === '') return true 
    return new AuthApi().checkUniqueEmail(value)
})