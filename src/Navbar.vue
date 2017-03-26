<template lang="html">
  <div class="phone-viewport">
    <md-toolbar style="background-color: black">
      <md-button class="md-default" @click.native="click('Index')">
        <h2>Resume Service</h2>
      </md-button>
      <div id='button'>
        <md-menu md-align-trigger>
          <md-button class="md-theme-default" md-menu-trigger>Menu for Members</md-button>

          <md-menu-content>
            <md-menu-item @click.native="click('Create')">Create Card</md-menu-item>
            <md-menu-item @click.native="click('Profile')">Manage Profile</md-menu-item>
            <!-- <md-menu-item>My Item 3</md-menu-item> -->
          </md-menu-content>
        </md-menu>
        <!-- <md-button class="md-default" @click.native="click('Create')">Create Card</md-button> -->
        <md-button class="md-default" @click.native="click('Group')">Category</md-button>
        <md-button class="md-theme-default" @click.native="click('Register')">Register</md-button>
        <md-button :disabled="someComputedProperty" class="md-theme-default" @click.native="click('Login')">Login</md-button>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
import router from '@/router'
export default {
  methods: {
    click (redirect) {
      router.push({ name: redirect })
    }
  }
}
</script>

<style lang="css">
.md-theme-default.md-toolbar {
  background-color: #e0e0e0;
}
.md-title2 {
  margin-left: 15%;

}
/*.md-toolbar .md-title:first-child {
  margin-left: 100px;
}*/

#button {
  margin-left: 30%;
}
/*#nav_bar {

}*/

</style>
