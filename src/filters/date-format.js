import Vue from 'vue';
import Moment from 'moment'

Vue.filter('dateFormat', (value) => {
  if(value) {
    return Moment(String(value)).format('YYYY//MM/DD')
  }
})