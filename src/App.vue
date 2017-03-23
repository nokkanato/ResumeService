<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Nav-bar></Nav-bar>

    <router-view></router-view>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'app',
  components: {
    NavBar: require('./NavBar.vue')
  },
  methods: {
    click (redirect) {
      router.push({ name: 'Group' })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
