<template lang="html">
  <div id='body'>
    <md-card>
      <md-card-header>
        <div class="md-title">Register</div>
        <div class="md-subhead">Yay</div>
      </md-card-header>

      <md-card-actions id='cardaction'>
        <md-button>Employee</md-button>
        <md-button>Employer</md-button>
      </md-card-actions>

      <br><br><br><br><br><br>
      <md-input-container id='container'>
       <label>Username</label>
       <md-input v-model='username' maxlength="20"></md-input>
     </md-input-container>
    <md-input-container id='container' md-has-password>
      <label>Password</label>
      <md-input v-model='password' type="password"></md-input>
    </md-input-container>
    <md-input-container id='container' md-has-password>
      <label>Confirmation Password</label>
      <md-input v-model='comfirmPassword' type="password"></md-input>
    </md-input-container>

  <md-button class="md-theme-default" @click.native="register">Register</md-button>


</md-card>
  </div>

</template>

<script>
import RegisterApi from '@/api/register.js'
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
    }
  }
}
</script>

<style lang="css">
</style>
