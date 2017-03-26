<template lang="html">
  <div class="container">
    <md-layout md-flex-xsmall="20" md-flex-small="10" md-flex-medium="5">
      <md-card md-with-hover id="eachCard" @click.native="click('Card')" v-for="acard in lst" >
        <md-card-header>
          <div class="md-title">
            <md-icon class="material-icons md-size-3x">{{ acard[0] }}</md-icon>

            <!-- <i class="material-icons">videogame_asset</i> -->

          </div>
          <div class="md-subhead"> </div>
        </md-card-header>
        <md-card-content>
          {{ acard[1] }}
        </md-card-content>
        <md-card-actions>

        </md-card-actions>
      </md-card>
    </md-layout>
  </div>

</template>

<script>
import router from '@/router'
export default {
  data () {
    return {
      lst: [
        ['radio', 'media'],
        ['videogame_asset', 'gammer'],
        ['audiotrack', 'musician'],
        ['photo_camera', 'photographer'],
        ['local_taxi', 'driver'],
        ['restaurant_menu', 'cook'],
        ['fitness_center', 'trainer'],
        ['pool', 'swimmer'],
        ['local_hospital', 'nurse'],
        ['layers', 'teacher'],
        ['palette', 'artist'],
        ['movie', 'creation'],
        ['keyboard', 'developer'],
        ['airplanemode_active', 'pilot'],
        ['business', 'accountance'],
        ['child_care', 'babysister'],
        ['casino', 'gambler'],
        ['directions', 'others']
      ]
    }
  },
  methods: {
    click (redirect) {
      router.push({ name: redirect })
    }
  }
}

</script>
<style lang="css">
/*#box {
  width: 200px;
}*/

/*.container{
  margin: 2%;
}*/

#eachCard{
    min-height: 250px;
    height: 200px;
    margin: auto;
    margin-top: 2%;
    width: 200px;
}

#eachCard:nth-last-of-type(-n+4){
    margin-bottom: 2%;
}
.md-layout {
  margin: 2%;
}
.i {
  height: 100px;

}
</style>



<!-- <md-layout  :md-gutter="8" md-align="center" style="margin-top:20px;">
  <md-list class="custom-list md-triple-line" v-for="acard in 15">
    <md-layout md-flex-xsmall="100" class="layout">
      <md-card md-with-hover>
        <md-card-header>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>
        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea.
        </md-card-content>
        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
    </md-layout>
  </md-list>
</md-layout> -->
