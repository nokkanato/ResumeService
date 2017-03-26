<template>
  <md-card id="preview_card">
    <!-- <md-card-media>
      <img src="assets/card-image-1.jpg" alt="People">
    </md-card-media> -->

    <md-card-header>
      <!-- <div class="md-title">Title goes here</div>
      <div class="md-subhead">Subtitle here</div> -->
    </md-card-header>

    <md-card-header>
      <div class="md-title">Create Resume</div>
      <div class="md-subhead">Employee</div>
    </md-card-header>
    <!-- <form novalidate @submit.stop.prevent="submit"> -->
    <md-input-container>
      <md-icon>face</md-icon>
      <label>Name</label>
      <md-input v-model='name' type="text"></md-input>
    </md-input-container>

    <md-input-container>
      <md-icon>face</md-icon>
      <label>Address</label>
      <md-input v-model='address' type="text"></md-input>
    </md-input-container>

    <md-input-container>
      <md-icon>face</md-icon>
      <label>Email</label>
      <md-input v-model='email' type="text"></md-input>
    </md-input-container>

    <md-input-container>
      <md-icon>face</md-icon>
      <label>Facebook</label>
      <md-input v-model='facebook' type="text"></md-input>
    </md-input-container>

    <md-input-container>
      <md-icon>face</md-icon>
      <label>Phone Number</label>
      <md-input v-model='phone_no' type="text"></md-input>
    </md-input-container>

    <md-button class="md-primary md-raised" id="tuum" @click.native="profile">Summit</md-button>

    <!-- <md-card-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
    </md-card-content> -->
  </md-card>
</template>


<script>
import employeeApi from '../api/employee.js'
export default {
  methods: {
    profile () {
      console.log('heyyyyyy')
      employeeApi.profile(this.name, this.address, this.email, this.facebook, this.phone_no)
    }
  },
  data () {
    return {
      name: '',
      address: '',
      email: '',
      facebook: '',
      phone_no: ''
    }
  }
}
</script>

<style>
#preview_card {
  margin: 50px;
  height: 600px;
  width: 900px;
  margin-left: 195px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
