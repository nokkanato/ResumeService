<template>
<md-layout :md-gutter="24" >

  <md-layout id="margin_layout" v-for="x in size" >
    <md-card id="Cards" @click.native="click('Preview',superarray[x-1])">

      <md-card-content>
        <center><img border="2" height="70" width="70" src="../assets/NoProfilePicture.jpg"></center>
        <br>
        First Name : {{superarray[x-1].first_name}}
        <br>
        Last Name : {{superarray[x-1].last_name}}
        <br>
        Education : {{superarray[x-1].education}}
        <br>
        Experience : {{superarray[x-1].experience}}
        <br>
        Specialities : {{superarray[x-1].specialties}}
        <br>
        Expected Salary : {{superarray[x-1].expected_salary}}
        <br>
        Facebook Name : {{superarray[x-1].fb_name}}
      </md-card-content>


    </md-card>
  </md-layout>

</md-layout>
</template>


<script>
import router from '@/router'
import CategoryApi from '@/api/categorycard'
import CardApi from '@/api/card'
import Store from '@/store'
export default {
  data () {
    return {
      posts: '',
      page: '',
      ohla: '',
      arr: [],
      la: '',
      size: '',
      superarray: []
    }
  },
  mounted: function () {
    this.methodnok()
    console.log('here', this.superarray)
    console.log(Store.state.page)
    this.page = Store.state.page
  },
  methods: {
    click (redirect, id) {
      console.log('id', id)
      console.log('ohhhh')
      // Store.state.preview_id = id
      // Store.state.preview_id = id
      // console.log(Store.state.preview_id)
      router.push({ name: redirect })
    },
    methodnok () {
      console.log('===== MOUNTED =====')
      // var superarray = []
      CategoryApi.get_category(_posts => {
        this.posts = _posts
        this.ohla = this.posts[0][this.page]
        this.size = this.ohla.size
        var array = JSON.parse(this.ohla)
        this.size = parseInt(array.length)
        // console.log(this.size)
        for (var x of array) {
          CardApi.get_card_specific(x, _lol => {
            this.la = _lol
            this.superarray.push(this.la)
          })
        }
      })
    }
  }
}
</script>

<style>
#fourCards{
  width: 240px;
  height: 300px;
  padding-top: 100px;
  padding-right: 100px;
},
#margin_layout{
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 100px;
}
</style>
