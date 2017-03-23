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
       <md-input maxlength="20"></md-input>
     </md-input-container>
    <md-input-container id='container' md-has-password>
      <label>Password</label>
      <md-input type="password"></md-input>
    </md-input-container>

  <md-button class="md-theme-default" @click.native="register">Register</md-button>


</md-card>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
