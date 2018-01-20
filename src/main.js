import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// Bulma
import 'font-awesome/css/font-awesome.css'
import './assets/sass/main.scss'

// Validation
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
