import { withParams } from 'vuelidate/lib'

export default withParams({ type: 'unique' }, (val) =>{
  if(val === '') return true // do not check empty values for uniqueness
  return new Promise((resolve, reject) => {
    console.log("Resolving")
    setTimeout(() => {
      resolve(false)
    }, 1000)
  })
})


