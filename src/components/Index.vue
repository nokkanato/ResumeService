<template lang="html">
  <md-layout :md-gutter="24" id="margin_layout" >

<md-layout id="margin_layout" v-for="x in posts">
<md-card id="Cards"  >
  <md-card-content>
    <center><img border="2" height="70" width="70" src="../assets/user.jpg"></center>
    <br>
    First Name : {{x.first_name}}
    <br>
    Last Name : {{x.last_name}}
    <br>
    Education : {{x.education}}
    <br>
    Experience : {{x.experience}}
    <br>
    Specialities : {{x.specialties}}
    <br>
    Expected Salary : {{x.expected_salary}}
    <br>
    Facebook Name : {{x.fb_name}}
  </md-card-content>

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
#Cards {
  width: 240px;
  height: 300px;
  padding-top: 8px;
  padding-left: 10px;
  text-align: left;
}
</style>
