import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
