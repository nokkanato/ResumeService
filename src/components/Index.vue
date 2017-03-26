<template lang="html">
  <div id='body'>
    <form class="search" novalidate @submit.stop.prevent="submit">
      <md-input-container id='container'>

        <md-icon>search</md-icon>
      <label>search</label>
      <md-input md-align-trigger type="search" maxlength="20" autocomplete="off"></md-input>
      <md-menu>
  <md-button md-menu-trigger>search</md-button>

  <md-menu-content>

    <md-menu-item>My Item 1</md-menu-item>
    <md-menu-item>My Item 2</md-menu-item>
    <md-menu-item>My Item 3</md-menu-item>
  </md-menu-content>
</md-menu>

    </md-input-container>
  </form>

  <!-- <div id="tagtag" style="width: 700px;height: 50px;margin-left: 300px;">
    <md-chips v-model="cities" :md-max="5" md-input-placeholder="Category...">
      <template scope="chip">
        <span >{{ chip.value }}</span>
        <small v-if="chip.value === 'radio'"></small>
      </template>
    </md-chips>
  </div> -->
</div>

</template>

<!-- <section class="main">

</section> -->

<script>
export default {
  data: () => ({
    cities: ['radio', 'media', 'videogame_asset', 'gammer', 'audiotrack', 'musician', 'photo_camera', 'photographer', 'local_taxi', 'driver', 'restaurant_menu', 'cook', 'fitness_center', 'trainer', 'pool', 'swimmer', 'local_hospital', 'nurse', 'layers', 'teacher', 'palette', 'artist', 'movie', 'creation', 'keyboard', 'developer', 'airplanemode_active', 'pilot', 'business', 'accountance', 'child_care', 'babysister', 'casino', 'gambler', 'directions', 'others']
  })
}
</script>

<style lang="css">
#body {
  padding-top: 400px;
},
#container {
  margin-left: 40%;
  width: 20%;
  opacity: 0.5;
},
#tagtag{
  margin-left: 400px;

}
</style>
