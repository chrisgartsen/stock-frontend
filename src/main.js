import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/sass/main.scss'

Vue.use(ElementUI)

// Utility libaries
import Vuelidate from 'vuelidate'
import dateFormat from './filters//date-format'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
