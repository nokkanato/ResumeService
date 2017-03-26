// import Promise from 'promise'

import Vue from 'vue'
// import store from '@/store.js'
export default {
  create_card (firstname, lastname, salary, age, education, experience, specialities, fbName, description, callback) {
    // console.log(store)
    var loginParams = {
      first_name: firstname,
      last_name: lastname,
      specialties: specialities,
      age: age,
      education: education,
      experience: experience,
      expected_salary: salary,
      description: fbName,
      fb_name: description

    }
    Vue.$http.post('/card', loginParams)
    .then(function (response) {
      // store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  },
  get_card (callback) {
    // console.log(store)
    Vue.$http.get('/card/')
    .then(function (response) {
      // store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  },
  update_card (firstname, lastname, salary, age, education, experience, specialities, fbName, description, callback) {
    // console.log(store)
    var loginParams = {
      employee: {
        firstname: firstname,
        lastname: lastname,
        salary: salary,
        age: age,
        education: education,
        experience: experience,
        specialities: specialities,
        fb_name: fbName,
        description: description
      }
    }
    Vue.$http.patch('/card/', loginParams)
    .then(function (response) {
      // store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  }
}
