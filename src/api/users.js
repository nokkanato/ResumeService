// import Promise from 'promise'

import Vue from 'vue'
import store from '@/store'

export default {
  login (email, password, callback) {
    var loginParams = {
      user: {
        email: email,
        password: password
      }
    }
    Vue.$http.post('/api/v1/users/login', loginParams)
    .then(function (response) {
      // store.dispatch('login')
      store.state.id = response.data
      // store..id = response.data
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  },
  logout (callback) {
    // console.log(store)
    Vue.$http.delete('/api/v1/users.json')
    .then(function (response) {
      // store.dispatch('logout')
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  },
  checkLoggedIn () {
    Vue.$http.get('/users/check_signed_in.json')
    .then(function (response) {
      // store.dispatch('login')
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  }
}
