<template>
  <md-card id="preview_card">
    <!-- <md-card-media>
      <img src="assets/card-image-1.jpg" alt="People">
    </md-card-media> -->

    <md-card-content id="preview_text">
      <!-- <div class="md-title">Title goes here</div>
      <div class="md-subhead">Subtitle here</div> -->
      <center><img border="2" height="156" width="156" src="../assets/NoProfilePicture.jpg"></center>
      <br>
      <br>
      First Name : {{la.first_name}}
      <br>
      <br>
      Last Name : {{la.last_name}}
      <br>
      <br>
      Education : {{la.education}}
      <br>
      <br>
      Experience : {{la.experience}}
      <br>
      <br>
      Specialities : {{la.specialties}}
      <br>
      <br>
      Expected Salary : {{la.expected_salary}}
      <br>
      <br>
      Facebook Name : {{la.fb_name}}
    </md-card-content>

    <!-- <md-card-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
    </md-card-content> -->
  </md-card>
</template>


<script>
import CardApi from '@/api/card'
// import Store from '@/store'
export default {
  mounted: function () {
    this.methodnok()
    console.log('n')
  },
  methods: {
    methodnok () {
      // var nu = Store.state.preview_id
      console.log('sasss')
      CardApi.get_card_specific(11, _lol => {
        this.la = _lol
      })
    }
  },
  data () {
    return {
      la: ''
    }
  }
}
</script>

<style>
#preview_card {
  margin: 50px;
  height: 800px;
  padding-top: 20px;
}
#preview_text{
  font-size: 30px;
  font-weight: bold;
}
</style>
