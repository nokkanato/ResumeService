// import Promise from 'promise'

import Vue from 'vue'
// import store from '@/store.js'
export default {

  get_category (callback) {
    // console.log(store)
    Vue.$http.get('/category')
    .then(function (response) {
      // store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  }

}
