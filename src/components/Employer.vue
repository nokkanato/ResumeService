<template lang="html">
  <md-card id="new_card">
  <md-card-header>
    <div class="md-title">Create Resume</div>
    <div class="md-subhead">Employer</div>
  </md-card-header>
  <form novalidate @submit.stop.prevent="submit">
  <md-input-container>
    <md-icon>face</md-icon>
    <label>Username</label>
    <md-input v-model='username' type="text"></md-input>
  </md-input-container>

  <md-input-container>
    <md-icon>face</md-icon>
    <label>Position Need</label>
    <md-input v-model='position_need' type="text"></md-input>
  </md-input-container>

  <md-input-container>
    <md-icon>face</md-icon>
    <label>Requirement</label>
    <md-input v-model='requirement' type="text"></md-input>
  </md-input-container>

  <md-input-container>
    <md-icon>face</md-icon>
    <label>Salary Suggest</label>
    <md-input v-model='salary_suggest' type="text"></md-input>
  </md-input-container>

  <md-input-container>
    <md-icon>face</md-icon>
    <label>Description</label>
    <md-input v-model='description' type="text"></md-input>
  </md-input-container>
  <!-- <md-button id="tuum">Summit</md-button> -->
  <md-button class="md-primary md-raised" id="tuum" @click.native="openDialog('dialog1')">Summit</md-button>

  <md-dialog md-open-from="#tuum" md-close-to="#tuum" ref="dialog1">
    <center><md-dialog-title style="border-style: solid;color:black;padding-bottom:20px;">Preview of your Resume</md-dialog-title></center>
    <center><img height="156.5" width="156.5" src="../assets/user.jpg"></center>

    <md-dialog-content id="bold">
      <br>
      <h4>Username: {{ username }}</h4>
      <h4>Position Need: {{ position_need }}</h4>
      <h4>Requirement: {{ requirement }}</h4>
      <h4>Salary Suggest: {{ salary_suggest }}</h4>
      <h4>Description: {{ description }}</h4>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-accent" @click.native="closeDialog('dialog1')">Cancel</md-button>
      <md-button class="md-warning" @click.native="create_employer_profile">Ok</md-button>
    </md-dialog-actions>
  </md-dialog>

</form>
</md-card>
</template>

<script>
import employerApi from '../api/employer.js'
export default {
  methods: {
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
    },
    create_employer_profile () {
      console.log('heyyyyyy')
      employerApi.create_employer_profile(this.username, this.position_need, this.requirement, this.salary_suggest, this.description)
      this.$refs['dialog1'].close()
    }
  },
  data () {
    return {
      username: '',
      position_need: '',
      requirement: '',
      salary_suggest: '',
      description: ''
    }
  }
}
</script>
