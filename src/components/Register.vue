<template lang="html">

  <div class='user' id='body'>
    <md-card id='set_box'>



  <md-card-header>
    <div class="md-title">Register</div>
    <div class="md-subhead">EMPLOYEE</div>
  </md-card-header>

<br><br>
  <md-input-container id='container'>
   <label>Username</label>
   <md-input v-model='username' maxlength="20"></md-input>
 </md-input-container>



  <md-input-container id='container' md-has-password>
    <label>Password</label>
    <md-input v-model='password' type="password"></md-input>
  </md-input-container>
  <md-button class="md-theme-default" @click.native="register">Register</md-button>


</md-card>
  </div>

</template>


<script>
import RegisterApi from '@/api/register.js'
import router from '@/router'
export default {
  data () {
    return {
      username: '',
      password: '',
      comfirmPassword: ''
    }
  },
  methods: {
    register () {
      RegisterApi.login(this.username, this.password, this.comfirmPassword)
      router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="css">
</style>
