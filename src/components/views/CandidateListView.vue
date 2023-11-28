<script>
import CandidateCard from "@/components/CandidateCard.vue";
import { candidateStore } from '@/store/store.js';

export default {
  mounted() {
  },
  data() {
    return {
      candidateStore,
      search: '',
      candidateList: candidateStore.candidateList || []
    }
  },
  components: {
    CandidateCard
  },
  methods: {
    searchSkill(){
      this.candidateList = this.candidateStore.searchSkill(this.search);
    },
    removeSearch(){
      this.search = '';
      this.candidateList = this.candidateStore.searchSkill();
    }
  }
}
</script>

<template>
  <div class="cand-list">
    <div class="search">
      <input data-testid="search-input" v-model="search" placeholder="search skills" type="text"/>
      <button data-testid="search-btn" class="btn-prm" @click="searchSkill">Search</button>
      <button data-testid="search-all"  class="btn-sec" @click="removeSearch">All</button>
    </div>
    <p data-testid="profiles-found-tag" style="opacity: 0.6">{{candidateList.length}} profiles found</p>
    <div class="cardlist">
      <CandidateCard v-bind:key="candidate" v-for="candidate in candidateList" :candidate="candidate"></CandidateCard>
    </div>
  </div>

</template>

<style>
</style>
