// import Promise from 'promise'

import Vue from 'vue'
// import store from '@/store.js'

export default {
  employee_profile (name, address, email, facebook, phoneNumber, callback) {
    // console.log(store)
    var loginParams = {
      employee: {
        name: name,
        address: address,
        email: email,
        facebook: facebook,
        phone_no: phoneNumber
      }
    }
    Vue.$http.post('/employee_profile', loginParams)
    .then(function (response) {
      // store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  }
}
