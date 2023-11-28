<script>
import { candidateStore } from '@/store/store.js';
export default {
  data() {
    return {
      candidateStore,
      candidate:{
        name: '',
        role: '',
        email: '',
        skills: []
      },
      skillInput: '',
      alert : undefined
    }
  },
  methods: {
    addCandidate(event) {
      event.preventDefault();
      this.alert = undefined;
      const isCandidateAdded = candidateStore.addCandidate(this.candidate);

      if(isCandidateAdded){
        this.resetCandidate();
        // set success alert
        this.alert = {
          message: 'candidate profile created!',
          type: "success"
        };

      } else if(candidateStore.candidateList.findIndex(candidate => candidate.email == this.candidate.email) != -1) {
        // set Unsuccessful alert
        this.alert = {
          message: 'candidate with this email already exists!',
          type: "error"
        }
      } else if(this.candidate.skills.length == 0) {
        // set Unsuccessful alert
        this.alert = {
          message: 'You must enter at least one skill.',
          type: "error"
        }
      } else if(this.candidate.name == '' || this.candidate.role == '', this.candidate.email == '') {
        // set Unsuccessful alert
        this.alert = {
          message: 'All the fields on the form are required.',
          type: "error"
        }
      }
    },
    resetCandidate(){
      this.candidate = {
        name: '',
        role: '',
        email: '',
        skills: []
      };
      this.skillInput = '';
    },
    resetClick(event){
      event.preventDefault();
      this.resetCandidate();
      this.alert = undefined;
    },
    addSkill(event){
      event.preventDefault();
      this.candidate.skills.push(this.skillInput);
      this.skillInput = ' ';
    }
  },
  computed: {
    disableAddSkillButton(){
      return this.skillInput == '' || this.candidate.skills.length >= 5;
    },
    isSubmitDisabled(){
      return this.candidate.name == '' || this.candidate.role == '' || this.candidate.email == '' || this.candidate.skills.length == 0 || this.candidate.skills.length > 5;
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-center">
    <form data-testid="registration-form" class="form">
      <label>Name:</label>
      <input v-model="candidate.name" data-testid="form-input-name"  type="text"/>
      <label>Role:</label>
      <input v-model="candidate.role" data-testid="form-input-role"  type="text"/>
      <label>Email:</label>
      <input v-model="candidate.email" data-testid="form-input-email"  type="email"/>
      <label>Skills (max 5):</label>
      <div class="skills">
        <div class="skill-input">
          <input v-model="skillInput" data-testid="form-input-skill" type="text" maxLength="100"/>
          <button data-testid="add-btn" class="btn-prm" @click="addSkill" :disabled="disableAddSkillButton">Add</button>
        </div>
        <div class="skill-list">
          <div v-bind:key="skill" v-for="skill in candidate.skills" data-testid="skill-tag" class="skilltag">{{skill}}</div>
        </div>
      </div>
      <p data-testid="alert-message" class="message" v-if="alert" v-bind:class="alert.type">{{alert.message}}</p>
      <button @click="addCandidate" data-testid="submit-btn" class="btn-prm" type="submit" :disabled="isSubmitDisabled">Submit</button>
      <div data-testid="reset-btn" class="btn-prm" type="submit" @click="resetCandidate">Reset</div>

    </form>
  </div>
</template>

<style>
</style>
