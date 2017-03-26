<template lang="html">
  <div class='user' id='body'>
    <md-card id='set_box'>


  <md-card-header>
    <div class="md-title">Login</div>
    <div class="md-subhead">Resume</div>
  </md-card-header>

  <md-card-actions id='cardaction'>
    <md-button>Employee</md-button>
    <md-button>Employer</md-button>
  </md-card-actions>

<br><br>
  <md-input-container id='container'>
   <label>Email</label>
   <md-input v-model='username' maxlength="20"></md-input>
 </md-input-container>



  <md-input-container id='container' md-has-password>
    <label>Password</label>
    <md-input v-model='password' type="password"></md-input>
  </md-input-container>
  <md-button class="md-theme-default" @click.native="login">Login</md-button>


</md-card>
  </div>

</template>

<script>
import UserApi from '../api/users.js'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      UserApi.login(this.username, this.password)
      // router.push({ name: 'Register' })
    }
  }
}
</script>

<style lang="css">
#body {
  padding-top: 100px;
}
#set_box {
  width: 400px;
  height: 400px;
  margin-left: 400px;
}

#cardaction {
  margin-right: 20%;
}

#container {
  width: 50%;
  margin-left: 26%;
}
</style>
