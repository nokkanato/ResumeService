import Vue from 'vue'
// import store from '@/store.js'

export default {
  login (email, password, confirmPassword, callback) {
    console.log(email + password + confirmPassword)
    // console.log(store)
    var loginParams = {
      user: {
        email: email,
        password: password,
        password_confirmation: confirmPassword
      }
    }
    console.log(loginParams)
    Vue.$http.post('/api/v1/users', loginParams)
    .then(function (response) {
      // store.dispatch('login')
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
