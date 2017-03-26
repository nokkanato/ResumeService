<template lang="html">
  <md-card id="new_card">
  <md-card-header>
    <div class="md-title">Create Resume</div>
    <div class="md-subhead">Employee</div>
  </md-card-header>
  <form novalidate @submit.stop.prevent="submit">
  <md-input-container>
    <md-icon>face</md-icon>
    <label>Firstname</label>
    <md-input v-model='firstname' type="text"></md-input>
  </md-input-container>

  <md-input-container>
    <md-icon>face</md-icon>
    <label>Lastname</label>
    <md-input v-model='lastname' type="text"></md-input>
  </md-input-container>

  <md-input-container>
    <md-icon>face</md-icon>
    <label>Age</label>
    <md-input v-model='age' type="text"></md-input>
  </md-input-container>

  <md-input-container>
    <md-icon>face</md-icon>
    <label>Education</label>
    <md-input v-model='education' type="text"></md-input>
  </md-input-container>

  <md-input-container>
    <md-icon>face</md-icon>
    <label>Experience</label>
    <md-input v-model='experience' type="text"></md-input>
  </md-input-container>

  <md-input-container>
    <md-icon>face</md-icon>
    <label>Specialities</label>
    <md-input v-model='specialities' type="text"></md-input>
  </md-input-container>

  <md-input-container>
    <md-icon>face</md-icon>
    <label>Expected Salary</label>
    <md-input v-model='salary' type="text"></md-input>
  </md-input-container>

  <md-input-container>
    <md-icon>face</md-icon>
    <label>Facebook Name</label>
    <md-input v-model='fbname' type="text"></md-input>
  </md-input-container>

  <md-input-container>
    <md-icon>speaker_notes</md-icon>
    <label>A Little bit about yourself</label>
    <md-textarea v-model='info' ></md-textarea>
  </md-input-container>
  <!-- <md-button id="tuum">Summit</md-button> -->
  <md-button class="md-primary md-raised" id="tuum" @click.native="openDialog('dialog1')">Summit</md-button>

  <md-dialog md-open-from="#tuum" md-close-to="#tuum" ref="dialog1">
    <center><md-dialog-title style="border-style: solid;color:black;padding-bottom:20px;">Preview of your Resume</md-dialog-title></center>
    <center><img height="156.5" width="156.5" src="../assets/user.jpg"></center>

    <md-dialog-content id="bold">
      <br>
      <h4>Firstname: {{ firstname }}</h4>
      <h4>Lastname: {{ lastname }}</h4>
      <h4>Age: {{ age }}</h4>
      <h4>Education: {{ education }}</h4>
      <h4>experience: {{ experience }}</h4>
      <h4>specialities: {{ specialities }}</h4>
      <h4>Expexted Salary: {{ salary }}</h4>
      <h4>Facebook Name: {{ fbname }}</h4>
      <h4>{{ info }}</h4>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-accent" @click.native="closeDialog('dialog1')">Cancel</md-button>
      <md-button class="md-warning" @click.native="create_employee_profile">Ok</md-button>
    </md-dialog-actions>
  </md-dialog>

</form>
</md-card>
</template>




<script>
import cardApi from '../api/card.js'
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
    create_employee_profile () {
      console.log('heyyyyyy')
      cardApi.create_employee_profile(this.username, this.specialities, this.age, this.education, this.experience, this.expected_salary, this.description, this.fb_name)
      this.$refs['dialog1'].close()
      // router.push({ name: 'Register' })
    }
  },
  data () {
    return {
      firstname: '',
      lastname: '',
      salary: '',
      age: '',
      education: '',
      experience: '',
      specialities: '',
      fbname: '',
      info: ''
    }
  }
}
</script>

<style lang="css">
#new_card{
  width: 900px;
  margin-left: 195px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
}
#tuum{
  width: 100%;
  background-color: #f44271;
  color: white;
}
</style>
