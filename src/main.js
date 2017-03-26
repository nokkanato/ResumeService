// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Axios from 'axios'
Vue.$http = Axios

Vue.use(VueMaterial)

Vue.config.productionTip = false

Axios.defaults.baseURL = 'http://localhost:3000'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.withCredentials = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
