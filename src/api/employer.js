// import Promise from 'promise'

import Vue from 'vue'
// import store from '@/store.js'

export default {
  create_employer_profile (username, positionNeed, requirement, salarySuggest, description, callback) {
    // console.log(store)
    var loginParams = {
      employee: {
        username: username,
        positionNeed: positionNeed,
        requirement: requirement,
        salarySuggest: salarySuggest,
        description: description
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
