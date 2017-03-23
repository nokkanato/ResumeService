<template lang="html">
  <div id='body'>
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container id='container'>
        <md-icon>search</md-icon>
      <label>Input</label>
      <md-input maxlength="20"></md-input>
    </md-input-container>
  </form>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
#body {
  padding-top: 400px;
}
#container {
  margin-left: 40%;
  width: 20%;
  opacity: 0.5;

}
</style>
