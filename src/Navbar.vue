<template lang="html">
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-default" @click.native="click('Index')">
        <h2>Resume Service</h2>
      </md-button>
      <div id='button'>
        <md-button class="md-default" @click.native="click('Login')">Login</md-button>
        <md-button class="md-theme-default" @click.native="click('Register')">Register</md-button>
        <md-button class="md-theme-default" @click.native="click('Group')">Category</md-button>
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
  margin-left: 50%;
}

</style>
