// import Promise from 'promise'

import Vue from 'vue'
// import store from '@/store.js'

export default {
  create_employee_profile (username, specialities, age, education, experience, expectedSalary, description, fbName, callback) {
    // console.log(store)
    var loginParams = {
      employee: {
        username: username,
        specialities: specialities,
        age: age,
        education: education,
        experience: experience,
        expectedSalary: expectedSalary,
        description: description,
        fbName: fbName
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
