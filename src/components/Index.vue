<template lang="html">
  <md-layout :md-gutter="24" id="margin_layout" >

<md-layout id="margin_layout" v-for="x in posts">
<md-card id="fourCards" @click.native="click('Preview')" >

  Course : {{x.last_name}}

</md-card>
</md-layout>

</md-layout>

</template>


<script>
import CardApi from '@/api/card.js'
export default {
  mounted: function () {
    this.methodnok()
  },
  methods: {
    methodnok () {
      console.log('===== MOUNTED =====')
      CardApi.get_card(_posts => {
        this.posts = _posts
        console.log(this.posts)
      })
    }
  },
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
