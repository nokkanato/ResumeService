<template>
<md-layout :md-gutter="24" id="margin_layout" >

  <md-layout id="margin_layout" v-for="x in 8">
    <md-card id="fourCards" @click.native="click('Preview')">
    </md-card>
  </md-layout>

</md-layout>
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
